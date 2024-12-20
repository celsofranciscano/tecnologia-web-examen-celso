import Nav from "@/components/dashboard/sidebar/Nav";
function Layout({ children }) {
  const links = [
    { name: "Departamentos", path: "/dashboard/departamentos" },
    { name: "Empleados", path: "/dashboard/departamentos/empleados" },
    { name: "Autos", path: "/dashboard/departamentos/autos" },
  ];

  return (
    <section className="grid gap-4 ">
      <header className="">
        <Nav links={links} />
      </header>
      {children}
    </section>
  );
}

export default Layout;
