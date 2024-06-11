"use client";

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { deleteInfos } from "@/api/deleteInfo";
import { useEffect, useState } from "react";
import { Infos } from "@prisma/client";
import { columns as createColumns } from "./columns";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DataTableProps {
    dataInfos: Infos[];
}

export function DataTable({ dataInfos }: DataTableProps) {
    const [data, setData] = useState<Infos[]>(dataInfos);

    const handleDelete = async (id: number) => {
        try {
            await deleteInfos(id);
            setData((prevData) => prevData.filter((info) => info.id !== id));
        } catch (error) {
            console.error("Error deleting info:", error);
        }
    };

    useEffect(() => {
        setData(dataInfos);
    }, [dataInfos]);

    const columns = createColumns(handleDelete);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
            pagination: {
                pageSize: 50,
            },
        },
    });

    return (
        <>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={`trw-${headerGroup.id}`}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead
                                            key={`inf-head-${header.id}`}
                                        >
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                      header.column.columnDef
                                                          .header,
                                                      header.getContext()
                                                  )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row, k) => (
                                <TableRow
                                    key={`tw-inf-${row.id}`}
                                    data-state={
                                        row.getIsSelected() && "selected"
                                    }
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell
                                            key={`${cell.row.original.id}-${cell.id}-${k}`}
                                            className="text-white"
                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow key={`trw-nrs`}>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    <ChevronLeft size={16} />
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    <ChevronRight size={16} />
                </Button>
            </div>
        </>
    );
}
