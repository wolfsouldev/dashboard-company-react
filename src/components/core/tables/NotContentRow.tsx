import { TableRow, TableCell } from "@/components/ui";
import { PackageOpen } from "lucide-react";

interface Props {
  length: number;
  text?: string;
}

export const NotContentRow = (props: Props) => {
  const { length, text = " No hay resultados." } = props;

  return (
    <TableRow>
      <TableCell colSpan={length} className="h-24 text-center">
        <div className="grid place-items-center">
          <PackageOpen className="size-16" strokeWidth={1} />
          {text}
        </div>
      </TableCell>
    </TableRow>
  );
};
