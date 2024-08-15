import { FormInput } from "@/components/core/forms/FormInput";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";
import { FormTextArea } from "../../../../components/core/forms/FormTextArea";
import { FormSelect } from "@/components/core/forms/FormSelect";
import { FormSwitch } from "@/components/core/forms/FormSwitch";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  productName: z.string().nonempty(),
  description: z.string(),
  code: z.string(),
  category: z.string(),
  price: z.number({ message: "Debe asignarle un precio" }),
  priceOnSale: z.number(),
  onSale: z.boolean(),
  visible: z.boolean(),
});

type IForm = z.infer<typeof formSchema>;

const NewProduct = () => {
  const form = useForm<IForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: "Pepe",
      description: "lorem",
      code: "21X",
      category: "1",
      price: 300,
      priceOnSale: 250,
      onSale: true,
      visible: true,
    },
    // mode:'onChange'
  });

  const item = [
    { name: "1", label: "Bebidas" },
    { name: "2", label: "Comidas" },
  ];

  console.log(form.watch());

  const onSubmit = () => {};
  return (
    <section>
      <header>
        <h1 className="text-xl">Crear nuevo producto</h1>
      </header>

      <Card className="max-w-2xl mx-auto ">
        <CardHeader>
          <Label className="text-2xl">Detalles</Label>
          <p className="text-sm opacity-80">Nombre, descripción, imágenes...</p>
        </CardHeader>
        <Separator className="my-3" />
        <CardContent>
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormInput
                  control={form.control}
                  label="Nombre"
                  name="productName"
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
                    <FormSwitch
                      control={form.control}
                      label="Visible"
                      name="visible"
                    />
                  </aside>
                </div>

                <Separator className="my-3" />

                <div className="mt-5">
                  <Label className="pb-4">Imágenes</Label>
                  <div className="mt-5"></div>
                </div>

                <footer className="flex justify-end w-full mt-5">
                  <Button type="submit">Crear producto</Button>
                </footer>
              </form>
            </Form>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default NewProduct;
