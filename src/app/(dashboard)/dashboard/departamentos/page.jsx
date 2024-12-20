import Table from "@/components/dashboard/table/Table";
function DepartamentosPage() {
  const columns = [
    "ID",
    "Departamento",
    "Estado",
    "Acciones",
  ];

  const rows = [
    "PK_department",
    "department",
    "status",
  ];

  return (
    <section className="grid gap-4">
      <div className="py-4 p-2 ">
        <h1 className="text-2xl text-zinc-200 font-medium">Departamentos</h1>
      </div>

      <Table
        url={"departamentos"}
        columns={columns}
        rows={rows}
        name={"departamentos"}
    
      />
    </section>
  );
}

export default DepartamentosPage;
