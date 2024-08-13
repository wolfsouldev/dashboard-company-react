import { Control, FieldValues, Path } from "react-hook-form";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormField,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

interface FormInputProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  label: string;
  placeholder?: string;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
}

export function FormTextArea<TFieldValues extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  className
}: FormInputProps<TFieldValues>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea placeholder={placeholder}  {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
