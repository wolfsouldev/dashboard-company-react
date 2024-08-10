import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import columns from "./client-table-data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import { NotContentRow } from "@/components/core/tables/NotContentRow";

export const TableClient = () => {
  const data = [
    {
      id: "728ed52f",
      firstName: "Prueba",
      lastName: "A",
      photo: "/img/avatar/avatar-1.png",
      email: "chupamelo@gmail.com",
      phone: "53698741",
      category: "VIP",
    },
    {
      id: "728ed52f",
      firstName: "Prueba",
      lastName: "A",
      photo: "/img/avatar/avatar-2.png",
      email: "chupamelo@gmail.com",
      phone: "53698741",
      category: "-",
    },
    // ...
  ];

  //const data2 = [];

  const table = useReactTable({
    columns,
    data: data,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
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
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <NotContentRow length={columns.length}  />
          )}
        </TableBody>
      </Table>
    </div>
  );
};
