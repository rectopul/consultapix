const appPageUrl = `https://sandboxaqpago.aqbank.com.br/api/dict/`;

export async function consultPix(data: String): Promise<any> {
    try {
        const options: RequestInit = {
            method: "GET",
            headers: {
                accept: "application/json",
            },
        };
        const req = await fetch(`${appPageUrl}${data}`, options);

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
