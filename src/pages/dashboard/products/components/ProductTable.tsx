"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CustomerIcon from "@/components/core/CustomerIcon";
import { Eye, Plus } from "lucide-react";
import { NavLink } from "react-router-dom";
import { LoadingTable } from "@/components/core/tables/Loadingtable";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isLoading: boolean;
}

export function ProductTable<TData, TValue>({
  columns,
  data,
  isLoading,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = useState({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      rowSelection,
      columnFilters,
      columnVisibility,
    },
  });

  const colsViews = table.getAllColumns().filter((item) => item.getCanHide());

  return (
    <>
      <div className="flex items-center justify-between py-4">
        <Input
          placeholder="Filtrar productos..."
          value={(table.getColumn("product")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("product")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />

        <aside className="flex items-center gap-x-5">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant={"outline"} className="flex items-center gap-x-2">
                <CustomerIcon icon={Eye} />
                Columnas
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              {colsViews.map((col) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={col.id}
                    checked={col.getIsVisible()}
                    className="capitalize "
                    onCheckedChange={(value) => col.toggleVisibility(value)}
                  >
                    {col.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>

          <NavLink to={"new"}>
            <Button className="flex gap-x-2 items-center">
              <CustomerIcon icon={Plus} />
              Nuevo producto
            </Button>
          </NavLink>
        </aside>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className=" font-semibold ">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <LoadingTable length={columns.length} />
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
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
    </>
  );
}
