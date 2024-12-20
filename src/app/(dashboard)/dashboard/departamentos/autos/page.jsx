import Table from "@/components/dashboard/table/Table";
function ProductsPage() {
  const columns = [
    "ID",
    "Modelo",
    "Marca",
    "Descripcion",
    "Año",
    "Precio",
    "Estado",
    "Acciones",
  ];

  const rows = [
    "PK_sale",
    "carModel",
    "carBrand",
    "description",
    "year",
    "price",
    "status",
  ];

  return (
    <section className="grid gap-4">
      <div className="py-4 p-2 ">
        <h1 className="text-2xl text-zinc-200 font-medium">Autos</h1>
      </div>

      <Table
        url={"autos"}
        columns={columns}
        rows={rows}
        name={"autos"}
    
      />
    </section>
  );
}

export default ProductsPage;
