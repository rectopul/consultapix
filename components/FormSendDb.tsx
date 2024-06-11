"use client";

import { SubmitHandler, useForm } from "react-hook-form";

interface SendDBPayload {
    data: string;
}
export function FormDb() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<SendDBPayload>();

    const sendData: SubmitHandler<SendDBPayload> = async (data) => {
        try {
            const options: RequestInit = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            };

            const req = await fetch(
                `${process.env.NEXT_PUBLIC_BACK_URL}/infos`,
                options
            );
            const res = await req.json();
            return console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(sendData)} className="">
                <div className="my-5 rounded-lg border border-white overflow-hidden p-1 w-full">
                    <textarea
                        id="dados"
                        {...register("data")}
                        className="w-full min-h-[500px] bg-black text-white p-4 overflow-hidden border-none outline-none"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="border border-white rounded-md self-start px-6 py-2 hover:bg-white hover:text-black text-sm text-white font-medium"
                >
                    Rodar
                </button>
            </form>
        </>
    );
}
