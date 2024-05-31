import { ButtonLogin } from "@/components/ButtonLogin";

export default function Login() {
    return (
        <>
            <div className="w-full max-w-[1200px] mx-auto p-4">
                <div className="w-full max-w-[500px] my-10 mx-auto p-3 rounded-lg border border-white">
                    <h2 className="text-center text-xl mb-10">Login</h2>

                    <div className="w-[70%] my-3 mx-auto flex flex-col gap-8">
                        <div className="w-full">
                            <input
                                type="text"
                                className="bg-white rounded-md outline-none h-9 px-4 w-full text-black"
                                placeholder="usuario"
                            />
                        </div>

                        <div className="w-full">
                            <input
                                type="password"
                                className="bg-white rounded-md outline-none h-9 px-4 w-full text-black"
                                placeholder="senha"
                            />
                        </div>

                        <ButtonLogin />
                    </div>
                </div>
            </div>
        </>
    );
}
