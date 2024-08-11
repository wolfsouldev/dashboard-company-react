import CustomerIcon from "@/components/core/CustomerIcon";
import { Button } from "@/components/ui/button";
import { Pencil, Undo2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../data/product-data";
import { Product } from "../components/product-table-data";
import { Separator } from "@/components/ui/separator";
import StarRating from "@/components/Starts";
import { motion } from "framer-motion";
import { generateLayoutId } from "@/lib/utils";

const ProductDetail = () => {
  const { id } = useParams();
  const navigation = useNavigate();

  const product = data?.find((item) => item.id === id) as Product;

  const inStock = product?.stock > 0;

  const layoutIdImage = generateLayoutId([
    product.product,
    product.img,
    product.id,
  ]);

  return (
    <section>
      <header className="flex justify-between px-5 mb-5">
        <Button
          variant={"ghost"}
          className="flex items-center gap-x-3"
          onClick={() => navigation(-1)}
        >
          <CustomerIcon icon={Undo2} />
          <span className="font-medium">Regresar</span>
        </Button>

        <div>
          <Button>
            <CustomerIcon icon={Pencil} className="mr-2" /> Editar
          </Button>
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-x-20">
        <motion.picture layoutId={layoutIdImage} className="  ">
          <img src={product?.img} alt="" className="rounded-lg" />
        </motion.picture>

        <article>
          <div className="flex flex-col gap-y-4 mb-5">
            <span
              className={`${
                inStock ? "text-green-500" : "text-red-500"
              } text-lg font-semibold`}
            >
              {inStock ? "Disponible" : "Agotado"}
            </span>

            <motion.span
              className="text-3xl font-bold"
            >
              {product.product}
            </motion.span>

            <span className="text-2xl font-semibold">
              {formatePrice(product.price)}
            </span>

            <div>
              <StarRating totalValue={product.views} value={product.likes} />
            </div>

            <p className="font-light opacity-80">{product.description}</p>
          </div>
          <Separator />

          <div></div>
        </article>
      </div>
    </section>
  );
};

export default ProductDetail;

const formatePrice = (price: number) => {
  const formatted = new Intl.NumberFormat("cu-CU", {
    style: "currency",
    currency: "CUP",
  }).format(price);

  return formatted;
};
