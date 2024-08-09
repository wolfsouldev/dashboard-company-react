import { LucideIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import React from "react";

export interface ITableDate {
  rowId: string | number;
  rowColor?: string;
  iconRow?: LucideIcon;
  cell: Record<string, string | number | React.ReactNode>;
}

export interface IHeaderTable {
  acesKey: string;
  label: string ;
  align?: "left" | "right" | "center";
}

interface Props {
  tableDate: ITableDate[];
  headers: IHeaderTable[];
}

export const TableShow = (props: Props) => {
  const { tableDate, headers } = props;

  return (
    <>
      <div className="rounded-md border w-[90vw]">
        <Table className="">
          <TableHeader className="bg-slate-100 text-black dark:text-white">
            {headers.map((heder) => {
              return (
                <TableHead
                  className={` font-semibold text-${heder?.align ?? "left"}`}
                >
                  {heder.label}
                </TableHead>
              );
            })}
          </TableHeader>
          <TableBody>
            {tableDate?.length > 0 ? (
              <>
                {tableDate.map((row) => {
                  return (
                    <TableRow key={row.rowId}>
                      {headers.map((header) => {
                        const current = row.cell[header.acesKey];

                        return <TableCell>{current}</TableCell>;
                      })}
                    </TableRow>
                  );
                })}
              </>
            ) : (
              <TableRow>
                <TableCell
                  colSpan={tableDate.length}
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
};
