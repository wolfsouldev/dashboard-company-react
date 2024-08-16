import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";

import { Label } from "@/components/ui/label";
import { FormProduct } from "./components/FormProducts";

const NewProduct = () => {
  return (
    <section>
      <header>
        <h1 className="text-2xl font-medium">Crear nuevo producto</h1>
      </header>

      <Card className="max-w-2xl mx-auto ">
        <CardHeader>
          <Label className="text-2xl">Detalles</Label>
          <p className="text-sm opacity-80">Nombre, descripción, imágenes...</p>
        </CardHeader>
        <Separator className="my-3" />
        <CardContent>
          <div>
            <FormProduct />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default NewProduct;
