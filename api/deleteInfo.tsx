import { Infos } from "@prisma/client";

export async function deleteInfos(id: number): Promise<Infos> {
    try {
        const options: RequestInit = {
            method: "DELETE",
            headers: {
                accept: "application/json",
            },
        };
        const req = await fetch(
            `${process.env.NEXT_PUBLIC_BACK_URL}/infos/${id}`,
            options
        );

        if (req.status > 201) {
            throw new Error(`Info não existe`);
        }

        if (!req.ok) {
            const resp = await req.json();
            console.log(`resp`, resp);
            throw new Error(resp);
        }

        return await req.json();
    } catch (error) {
        console.log(error);
        throw error;
    }
}
