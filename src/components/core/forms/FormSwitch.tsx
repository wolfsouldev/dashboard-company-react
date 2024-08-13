import { Control, FieldValues, Path } from "react-hook-form";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormField,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";

interface FormInputProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  label: string;
  placeholder?: string;
}

export function FormSwitch<TFieldValues extends FieldValues>({
  name,
  control,
  label,
}: FormInputProps<TFieldValues>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex items-center gap-x-3">
          <FormLabel className="mt-2">{label}</FormLabel>
          <FormControl>
            <Switch {...field}  onCheckedChange={field.onChange} checked={field.value}/>
          </FormControl>
          <FormMessage className="block"/>
        </FormItem>
      )}
    />
  );
}
