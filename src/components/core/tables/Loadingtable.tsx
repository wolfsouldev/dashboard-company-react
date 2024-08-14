import { TableCell, TableRow } from "@/components/ui";
import { Loader2Icon } from "lucide-react";

interface Props {
    length: number;
  }
export const LoadingTable = (props: Props) => {
    const { length,  } = props;
  
    return (
      <TableRow>
        <TableCell colSpan={length} className="h-24 text-center">
          <div className="grid place-items-center mt-5">
            <Loader2Icon className="size-16 animate-spin" strokeWidth={1} />
            <span className="text-base">Cargado...</span>
          </div>
        </TableCell>
      </TableRow>
    );
  };
  