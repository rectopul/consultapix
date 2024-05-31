import { consultPix } from "@/api/consultaPix";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs"; // Use fs/promises para funções assíncronas
import path from "path";
import crypto from "crypto"; // Use o módulo crypto do Node.js
import { mockInfo } from "@/util/mockTxt";
import fsPromises from "fs/promises";
import prisma from "@/util/prismaClient";

export async function POST(req: NextRequest) {
    const body = (await req.json()) as { data: string };
    const dir = path.join(process.cwd(), "storage"); // Use process.cwd() para o diretório correto

    let lines = body.data.split(/\r?\n/);

    lines = lines.map((line) => line.trim());
    lines = lines.filter((line) => line.length > 0);

    console.log(lines);

    try {
        // Crie o diretório se não existir
        if (!fs.existsSync(dir)) {
            await fsPromises.mkdir(dir, { recursive: true });
        }

        const response = await Promise.all(
            lines.map(async (el) => {
                // const res = await consultPix(el);
                const TokenHasConsult = await prisma.infos.findFirst({
                    where: { pix: el },
                });

                if (TokenHasConsult) {
                    return {
                        status: false,
                    };
                }

                // Gera o hash do conteúdo
                const hashDigest = crypto
                    .createHash("sha256")
                    .update(el)
                    .digest("hex");

                // Caminho completo do arquivo
                const filePath = path.join(dir, `${hashDigest}.txt`);

                // Escreva o conteúdo no arquivo
                await fsPromises.writeFile(filePath, mockInfo);

                // Retorna o caminho relativo do arquivo
                return `/storage/${hashDigest}.txt`;
            })
        );

        return NextResponse.json(response);
    } catch (error: any) {
        console.error("Erro ao processar a requisição:", error);
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}
