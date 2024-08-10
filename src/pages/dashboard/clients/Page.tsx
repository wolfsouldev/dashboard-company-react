import { TableClient } from "./components/TableClient";
import { CustomerBreadcrumb } from "@/components/core/CustomerBreadcrumb";

const ClientPage = () => {
  return (
    <section>
      <header>
        <CustomerBreadcrumb />
      </header>
      <TableClient />
    </section>
  );
};

export default ClientPage;
