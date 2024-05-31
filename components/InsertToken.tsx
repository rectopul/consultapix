"use client";

interface InsertTokenPayload {
    token: string;
}

import { insertToken } from "@/api/insertToken";
import { useForm, SubmitHandler } from "react-hook-form";

export function InsertToken() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<InsertTokenPayload>();

    const submitToken: SubmitHandler<InsertTokenPayload> = async (data) => {
        const token = await insertToken(data.token);
    };

    return (
        <>
            <div className="max-w-[1200px] mx-auto flex flex-col items-center pb-5 mt-10 px-4 gap-5">
                <h2 className="text-xl text-white font-medium text-center">
                    Deseja cadastrar um novo token?
                </h2>

                <form
                    className="w-full flex flex-col"
                    onSubmit={handleSubmit(submitToken)}
                >
                    <div className="grid grid-cols-[auto__150px] w-full">
                        <input
                            type="text"
                            {...register("token", { required: true })}
                            className="w-full h-9 bg-black outline-none rounded-l border-y border-l border-white text-white p-2 border-r-0"
                        />
                        <button className="h-9 border-y border hover:bg-white hover:text-black border-white rounded-r flex whitespace-nowrap justify-center items-center text-white text-sm font-medium self-end px-4">
                            Cadastrar token
                        </button>
                    </div>
                    {errors.token && (
                        <span className="self-start bg-red-600 text-white rounded-md py-1 px-3 my-2 font-medium text-xs text-center">
                            Informe o token a ser cadastrado
                        </span>
                    )}
                </form>
            </div>
        </>
    );
}
