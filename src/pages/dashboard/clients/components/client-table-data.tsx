import { ColumnDef } from "@tanstack/react-table";

export type Client = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  photo: string;
  phone: string;
  category?: string;
};

const columns: ColumnDef<Client>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     ></Checkbox>
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),

  //   // enableSorting: false,
  //   // enableHiding: false,
  // },
  {
    accessorKey: "client",
    header: "Cliente",

    cell({ row }) {
      const { email, firstName, lastName, photo } = row.original;
      return (
        <div className="flex gap-x-2 ">
          <img
            src={photo}
            width={60}
            height={60}
            alt={firstName + "-avatar"}

            className="rounded-full"
          />
          <div className="flex flex-col">
            <span className="font-semibold">
              {firstName} {lastName}
            </span>
            <span>{email}</span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "phone",
    header: "Teléfono",
    cell({ row }) {
      const { phone } = row.original;

      return <span className={``}>{phone}</span>;
    },
  },
  {
    accessorKey: "category",
    header: "Categoría",
    cell({ row }) {
      const { category } = row.original;

      return <span className={``}>{category}</span>;
    },
  },
];

export default columns;
