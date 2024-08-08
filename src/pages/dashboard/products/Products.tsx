import { columns } from "../components/product-table-data";
import { ProductTable } from "../components/ProductTable";

export const Products = () => {
  const data = [
    {
      id: "728ed52f",
      price: 100,
      product: "Urban Explorer Sneakers",
      img: "/img/products/product-1.webp",
      createdAt: new Date(),
      published: true,
      stock: 100,
      alertStock: 50,
    },
    {
      id: "728ed52f",
      price: 100,
      product: "Urban Explorer Sneakers",
      img: "/img/products/product-2.webp",
      createdAt: new Date(),
      published: false,
      stock: 90,
      alertStock: 600,
    },
    // ...
  ];
  return (
    <>
      <ProductTable columns={columns} data={data} />
    </>
  );
};
