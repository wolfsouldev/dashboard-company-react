import { FormInput } from "@/components/core/forms/FormInput";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";
import { FormTextArea } from "../../../../components/core/forms/FormTextArea";
import { Label } from "recharts";
import { FormSelect } from "@/components/core/forms/FormSelect";

const NewProduct = () => {
  const form = useForm();

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

        <Card className="max-w-2xl mx-auto ">
          <CardHeader>
            <h1 className="text-lg">Detalles</h1>
            <p className="text-sm opacity-80">
              Nombre, descripción, imágenes...
            </p>
          </CardHeader>
          <Separator className="my-3" />
          <CardContent>
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-2 gap-x-5">
                    <FormInput
                      control={form.control}
                      label="Nombre"
                      name="productName"
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

                  <FormTextArea
                    control={form.control}
                    label="Descripción"
                    name="description"
                    placeholder="....."
                    className="mt-2"
                  />
                  <Separator className="my-3" />
                  <div className="mt-5">
                    <Label className="pb-4">Imágenes</Label>
                    <div className="mt-5"></div>
                  </div>
                </form>
              </Form>
            </div>
          </CardContent>
        </Card>
      </header>
    </section>
  );
};

export default NewProduct;
