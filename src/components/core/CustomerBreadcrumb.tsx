import { useId } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { useLocation } from "react-router-dom";

export const CustomerBreadcrumb = () => {
  const { pathname } = useLocation();
  const paths = pathname.split("/").slice(1);
  const id = useId();

  return (
    <>
      <Breadcrumb className="hidden md:flex absolute top-10  mb-5">
        <BreadcrumbList>
          {paths.map((path, idx) => {
            return (
              <>
                {paths.length === 1 && (
                  <>
                    <BreadcrumbSeparator />
                  </>
                )}
                <BreadcrumbItem key={path + id}>
                  <BreadcrumbPage>{translatePath(path)}</BreadcrumbPage>
                </BreadcrumbItem>
                {idx < paths.length - 1 && <BreadcrumbSeparator />}
              </>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};

const translatePath = (path: string) => {
  switch (path) {
    case "dashboard":
      return "Dashboard";
      break;
    case "products":
      return "Productos";
      break;
    case "anality":
      return "Análisis";
      break;
    case "orders":
      return "Ordenes";
      break;
    case "clients":
      return "Clientes";
      break;

    default:
      break;
  }
};
