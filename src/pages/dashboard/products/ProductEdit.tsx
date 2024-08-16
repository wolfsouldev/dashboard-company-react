/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { data } from "./data/product-data";
import { useParams } from "react-router-dom";
import { FormProduct } from "./components/FormProducts";

const ProductEdit = () => {
  const { id } = useParams();

  const product = data.find((item) => item.id === id);

  return (
    <section>
      <header>
        <h1 className="text-2xl font-medium">Editar producto</h1>
      </header>

      <Card className="max-w-2xl mx-auto ">
        <CardHeader>
          <Label className="text-2xl">Detalles</Label>
          <p className="text-sm opacity-80">Nombre, descripción, imágenes...</p>
        </CardHeader>
        <Separator className="my-3" />
        <CardContent>
          <div>
            <FormProduct defaultValue={product} />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ProductEdit;
