"use client";

import { useRouter } from "next/navigation";

export function ButtonLogin() {
    const route = useRouter();

    const handlepanel = () => route.push(`/panel`);

    return (
        <>
            <button
                onClick={handlepanel}
                className="bg-slate-900 border border-white rounded-md self-center px-8 py-1"
            >
                Login
            </button>
        </>
    );
}
