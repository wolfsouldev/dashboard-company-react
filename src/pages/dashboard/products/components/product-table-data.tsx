"use client";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@radix-ui/react-checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { MoveDown } from "lucide-react";

export type Product = {
  id: string;
  price: number;
  product: string;
  img: string;
  createdAt: Date | string;
  published: boolean;
  stock: number;
  alertStock: number;
};

export const columns: ColumnDef<Product>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      ></Checkbox>
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),

    // enableSorting: false,
    // enableHiding: false,
  },
  {
    accessorKey: "product",
    header: "Producto",
    
    cell({ row }) {
      const src: string = row.original.img;
      const product: string = row.original.product;
      return (
        <div className="flex gap-x-2 ">
          <img
            src={src}
            width={60}
            height={60}
            alt={product + "-img"}
            className="rounded-lg"
          />
          <p className="font-semibold">{product}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "stock",
    header: "Stock",
    cell({ row }) {
      const stock: number = row.original.stock;
      const alertStock: number = row.original.alertStock;

      const alert = stock < alertStock;

      return (
        <span
          className={` mx-auto flex gap-x-2${
            alert ? "text-red-500" : "text-green-500"
          } `}
        >
          {stock}
          {alert && <MoveDown className="size-4" /> }
        </span>
      );
    },
  },
  {
    accessorKey: "price",
    header: "Precio",
    cell(props) {
      const { row } = props;
      const price = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);

      return <div className=" font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Creado",
    cell({ row }) {
      const date: Date = new Date(row.original.createdAt);

      const formatted = new Intl.DateTimeFormat("es-Es", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(date);

      return <div className=" ">{formatted}</div>;
    },
  },
  {
    accessorKey: "published",
    header: "Visible",
    cell({ row }) {
      const published: boolean = row.original.published;

      return (
        <Badge
          variant={"default"}
          className={` font-medium cursor-default hover:text-white ${
            published
              ? "bg-green-300 text-green-800"
              : "bg-red-300 text-red-800"
          }`}
        >
          {published ? "Visible" : "No Visible"}
        </Badge>
      );
    },
  },
];
