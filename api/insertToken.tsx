import { PixToken } from "@prisma/client";

export async function insertToken(token: String): Promise<PixToken> {
    try {
        const options: RequestInit = {
            method: "POST",
            headers: {
                accept: "application/json",
            },
            body: JSON.stringify({ token }),
        };
        const req = await fetch(
            `${process.env.NEXT_PUBLIC_BACK_URL}/tokens`,
            options
        );

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
