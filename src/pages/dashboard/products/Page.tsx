import { CustomerBreadcrumb } from "@/components/core/CustomerBreadcrumb";
import { columns } from "./components/product-table-data";
import { ProductTable } from "./components/ProductTable";
import getProducts from "./data/product-data";

 const Products = () => {

  //const products = getProducts()
  
  return (
    <>
    <CustomerBreadcrumb />
      <ProductTable columns={columns} data={[]}  isLoading={false}/>
    </>
  );
};


export default Products