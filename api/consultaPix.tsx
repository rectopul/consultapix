const appPageUrl = `${process.env.NEXT_PUBLIC_ASAAS_URL}`;

export async function consultPix(data: String): Promise<any> {
    try {
        const options: RequestInit = {
            method: "POST",
            headers: {
                accept: "application/json",
            },
            body: JSON.stringify({
                operationType: "PIX",
                pixAddressKeyType: "CPF",
                pixAddressKey: data,
                scheduleDate: "2024-09-01",
                value: 0.01,
            }),
        };
        const req = await fetch(`${appPageUrl}`, options);

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
