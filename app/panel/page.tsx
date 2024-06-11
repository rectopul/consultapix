import { FormDb } from "@/components/FormSendDb";
import { InsertToken } from "@/components/InsertToken";
import { WebSocketForm } from "@/components/WebSocketForm";
import InfosList from "@/components/infos/infosList";
import prisma from "@/util/prismaClient";

const getData = async () => {
    try {
        const infos = await prisma.infos.findMany();

        return { infos };
    } catch (error) {
        throw error;
    }
};

export default async function Panel() {
    const { infos } = await getData();

    return (
        <div className="bg-black">
            <InsertToken />
            <div className="w-full max-w-[1200px] mx-auto p-4 grid grid-cols-1 gap-5 my-10">
                <div className="w-full flex flex-col">
                    <h2 className="text-center text-white text-xl">
                        Lista de docs, separados por linhas
                    </h2>

                    <FormDb />
                </div>
            </div>
            <WebSocketForm infos={infos} />
        </div>
    );
}
