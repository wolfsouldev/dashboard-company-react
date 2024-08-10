import { LucideIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui";

interface Props {
  icon: LucideIcon;
  color?: string;
  tooltip?: string;
  className?: string;
}
export default function CustomerIcon(props: Props) {
  const { icon: Icon, color, tooltip, className } = props;

  return (
    <Tooltip>
      <TooltipTrigger>
        <Icon
          strokeWidth={1.5}
          color={color}
          className={`size-5  ${className}`}
        />
      </TooltipTrigger>
      {tooltip && (
        <TooltipContent>
          <span>{tooltip}</span>
        </TooltipContent>
      )}
    </Tooltip>
  );
}
