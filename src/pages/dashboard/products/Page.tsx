import { CustomerBreadcrumb } from "@/components/core/CustomerBreadcrumb";
import { columns } from "./components/product-table-data";
import { ProductTable } from "./components/ProductTable";
import data from "./data/product-data";

 const Products = () => {
  
  return (
    <>
    <CustomerBreadcrumb />
      <ProductTable columns={columns} data={data} />
    </>
  );
};


export default Products