"use client";

import { Infos } from "@prisma/client";
import { columns } from "./columns";
import { DataTable } from "./data-table";

interface InfosData {
    data: Infos[];
}

export default function InfosList({ data }: InfosData) {
    return (
        <div className="w-full mx-auto">
            <DataTable dataInfos={data} />
        </div>
    );
}
