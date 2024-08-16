/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FormInput } from "@/components/core/forms/FormInput";
import { FormSelect } from "@/components/core/forms/FormSelect";
import { FormSwitch } from "@/components/core/forms/FormSwitch";
import { FormTextArea } from "@/components/core/forms/FormTextArea";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Product } from "./product-table-data";

const formSchema = z.object({
  product: z.string().nonempty(),
  description: z.string(),
  code: z.string(),
  category: z.string(),
  price: z.number({ message: "Debe asignarle un precio" }),
  priceOnSale: z.number(),
  onSale: z.boolean(),
  visible: z.boolean(),
});

type IForm = z.infer<typeof formSchema>;
interface Props {
  defaultValue?: Product;
}
export const FormProduct = ({ defaultValue }: Props) => {
  const navigate = useNavigate();

  const form = useForm<IForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      product: defaultValue?.product,
      description: defaultValue?.description,
      code: "",
      category: "1",
      price: defaultValue?.price,
      priceOnSale: defaultValue?.price,
      onSale: defaultValue?.published,
      visible: defaultValue?.published,
    },
    // mode:'onChange'
  });

  const item = [
    { name: "1", label: "Bebidas" },
    { name: "2", label: "Comidas" },
  ];

  console.log(form.watch());

  const onSubmit = (dataFrom: IForm) => {
    //@ts-ignore
    dataFrom.id = "asd";
    //@ts-ignore
    data.push(dataFrom);
    navigate(-1);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormInput
          control={form.control}
          label="Nombre"
          name="product"
          placeholder=""
          type="text"
        />

        <FormTextArea
          control={form.control}
          label="Descripción"
          name="description"
          placeholder="....."
          className="mt-2"
        />
        <Separator className="my-3" />

        <div className="grid grid-cols-2 gap-x-5">
          <FormInput
            control={form.control}
            label="Código de Producto"
            name="code"
            placeholder=""
            type="text"
          />
          <FormSelect
            control={form.control}
            label="Categoría"
            name="category"
            placeholder=""
            selectItem={item}
            className="w-full"
          />
        </div>

        <div>
          <FormInput
            control={form.control}
            label="Precio base"
            name="price"
            placeholder=""
            type="number"
          />
          <FormInput
            control={form.control}
            label="Precio de oferta"
            name="priceOnSale"
            placeholder=""
            type="number"
          />

          <aside className="grid grid-cols-2 gap-x-5 mt-2">
            <FormSwitch
              control={form.control}
              label="En oferta"
              name="onSale"
            />
            <FormSwitch control={form.control} label="Visible" name="visible" />
          </aside>
        </div>

        <Separator className="my-3" />

        <div className="mt-5">
          <Label className="pb-4">Imágenes</Label>
          <div className="mt-5"></div>
        </div>

        <footer className="flex justify-end w-full mt-5">
          <Button type="submit">{defaultValue ? "Editar" : "Crear"} producto</Button>
        </footer>
      </form>
    </Form>
  );
};
