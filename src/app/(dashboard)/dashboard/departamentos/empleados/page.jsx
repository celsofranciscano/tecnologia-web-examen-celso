import Table from "@/components/dashboard/table/Table";
function ProductsPage() {
    const columns = [
        "ID",
        "Departamento",
        "Nombre",
        "Apellido",
        "Email",
        "Telefono",
        "Direccion",
        "Observacion",
        "Fecha de Naciemiento",
        "Salario",
        "Estado",
        "Acciones",
      ];
    
      const rows = [
        "PK_employee",
        "FK_department",
        "firstName",
        "lastName",
        "email",
        "phone",
        "address",
        "observations",
        "birthDate",
        "salary",
        "status",
      ];

  return (
    <section className="grid gap-4">
      <div className="py-4 p-2 ">
        <h1 className="text-2xl text-zinc-200 font-medium">Empleados</h1>
      </div>

      <Table
        url={"empleados"}
        columns={columns}
        rows={rows}
        name={"empleados"}
    
      />
    </section>
  );
}

export default ProductsPage;
