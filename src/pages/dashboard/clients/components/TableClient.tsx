import {
    ITableDate,
    TableShow,
    IHeaderTable,
  } from "@/components/core/TableShow";
  
  export const TableClient = () => {
    const headers: IHeaderTable[] = [
      {
        acesKey: "title",
        label: "Titulo",
      },
      {
        acesKey: "client",
        label: "Cliente",
      },
      {
        acesKey: "status",
        label: "Estado",
      },
    ];
  
    const tableDate: ITableDate[] = [
      {
        rowId: 1,
        cell: {
          title: <span className="text-red-500">Hola</span>,
          client: "hola",
          status: "hola",
        },
      },
    ];
  
    return <TableShow headers={headers} tableDate={tableDate} />;
  };
  