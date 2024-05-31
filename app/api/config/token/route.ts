import { consultPix } from "@/api/consultaPix";
import prisma from "@/util/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = (await req.json()) as { token: string };

    try {
        const { token } = body;

        const created = await prisma.pixToken.create({ data: { token } });

        return NextResponse.json(created);
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}
