import { InsertToken } from "@/components/InsertToken";

export default function Panel() {
    return (
        <>
            <InsertToken />
            <div className="w-full max-w-[1200px] mx-auto p-4 grid grid-cols-[70%_auto] gap-5 my-10">
                <div className="w-full flex flex-col">
                    <h2 className="text-center text-white text-xl">
                        Lista de docs, separados por linhas
                    </h2>

                    <div className="my-5 rounded-lg border border-white overflow-hidden p-1 w-full">
                        <textarea
                            name=""
                            id=""
                            className="w-full min-h-[500px] bg-black p-4 overflow-hidden border-none outline-none"
                        ></textarea>
                    </div>
                    <button className="border border-white rounded-md self-start px-6 py-2 hover:bg-white hover:text-black text-sm text-white font-medium">
                        Rodar
                    </button>
                </div>

                <div className="w-full flex flex-col">
                    <h2 className="text-center text-white text-xl">
                        Resultados
                    </h2>

                    <div className="my-5 rounded-lg border border-white overflow-hidden p-1 w-full">
                        <div className="w-full min-h-[500px] bg-black p-4 overflow-hidden border-none outline-none flex flex-col gap-5">
                            {Array.from({ length: 2 }, (_, i) => (
                                <span className="w-full flex flex-col gap-2 text-start text-white text-sm rounded-lg border border-white p-3">
                                    <div className="w-full">
                                        PIX: 10151496773
                                    </div>
                                    <div className="w-full">
                                        NOME: THIAGO DA SILVA LEOPOLDINO
                                    </div>
                                    <div className="w-full">
                                        STATUS:{" "}
                                        <span className="self-start ml-1 bg-red-500 py-1 px-2 text-white font-normal text-xs rounded-md">
                                            Não existente
                                        </span>
                                    </div>
                                    <div className="w-full">
                                        LINK:{" "}
                                        <a
                                            href="/storage/info1.txt"
                                            className="text-indigo-500"
                                        >
                                            Download Info
                                        </a>
                                    </div>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
