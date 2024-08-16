import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, MoveDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { generateLayoutId } from "@/lib/utils";

export type Product = {
  id: string;
  price: number;
  product: string;
  img: string;
  createdAt: Date | string;
  published: boolean;
  stock: number;
  alertStock: number;
  description?: string;
  views: number;
  likes: number;
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
    enableHiding: false,
  },
  {
    id:"Producto",
    accessorKey: "product",
    header: "Producto",

    cell({ row }) {
      const { img: src, product, id } = row.original;

      const layoutIdImg = generateLayoutId([product, src, id]);

      return (
        <NavLink to={`${id}`} className="flex gap-x-2 ">
          <motion.img
            src={src}
            width={60}
            height={60}
            alt={product + "-img"}
            className="rounded-lg"
            layoutId={layoutIdImg}
          />
          <motion.p className="font-semibold hover:underline">
            {product}
          </motion.p>
        </NavLink>
      );
    },
    enableHiding: false,
  },
  {
    id:"Stock",
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
          {alert && <MoveDown className="size-4" />}
        </span>
      );
    },
  },
  {
    id:"Precio",
    accessorKey: "price",
    header: "Precio",
    cell(props) {
      const { row } = props;
      const price = parseFloat(row.original.price.toString());
      const formatted = new Intl.NumberFormat("cu-CU", {
        style: "currency",
        currency: "CUP",
      }).format(price);
      return <div className=" font-medium">{formatted}</div>;
    },
  },
  {
    id:"Creado",
    accessorKey: "createdAt",
    header: "Creado",
    cell({ row }) {
      const date: Date = new Date(row.original.createdAt ?? new Date());

      const formatted = new Intl.DateTimeFormat("es-Es", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(date);

      return <div className=" ">{formatted}</div>;
    },
  },
  {
    id:"Visible",
    accessorKey: "published",
    header: ()=>{

      return <div className="text-center">Visible</div>
    },
    cell({ row }) {
      const published: boolean = row.original.published;

      return (
        <div className="flex justify-center">

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
        </div>

      );
    },
  },
  {
    accessorKey: "actions",
    header: "",
    cell({ row }) {
      const { id } = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="[&>*]:flex gap-5">
            <DropdownMenuItem className="flex gap-x-2 items-center" asChild>
              {/* <CustomerIcon icon={Eye} />  */}
              <NavLink to={`${id}`}>Ver detalles</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-x-2 items-center text-red-500 hover:text-red-500">
              {/* <CustomerIcon icon={Trash}  />  */}
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
    enableHiding: false,
  },
];
