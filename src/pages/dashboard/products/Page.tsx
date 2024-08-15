/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomerBreadcrumb } from "@/components/core/CustomerBreadcrumb";
import { columns } from "./components/product-table-data";
import { ProductTable } from "./components/ProductTable";
import {getProducts} from "./data/product-data";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then((res) => setProducts(res))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <CustomerBreadcrumb />
      <ProductTable columns={columns} data={products} isLoading={isLoading} />
    </>
  );
};

export default Products;
