"use client";
import { Infos } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { Trash, Trash2 } from "lucide-react";

export const columns = (
    handleDelete: (id: number) => void
): ColumnDef<Infos>[] => [
    {
        accessorKey: "id",
        header: "id",
    },
    {
        accessorKey: "name",
        header: "NOME",
    },
    {
        accessorKey: "pix",
        header: "PIX",
    },

    {
        accessorKey: "urlTxt",
        header: "Arquivo",
        cell: ({ row }) => {
            const original = row.original;

            return (
                <a
                    href={`${process.env.NEXT_PUBLIC_BACK_URL}${original.urlTxt}`}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download
                </a>
            );
        },
    },

    {
        accessorKey: "id",
        header: "Status",
        cell: () => {
            return (
                <span className="py-1 px-2 text-xs font-white bg-red-500 rounded-sm">
                    não existe
                </span>
            );
        },
    },

    {
        accessorKey: "id",
        header: "Ações",
        cell: ({ row }) => {
            const original = row.original;

            return (
                <Button
                    variant="destructive"
                    size="icon"
                    className="p-1 w-7 h-7"
                    onClick={() => handleDelete(original.id)}
                >
                    <Trash2 size={16} />
                </Button>
            );
        },
    },
];
