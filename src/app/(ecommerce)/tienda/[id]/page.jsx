import Button from "@/components/common/Button";

const productos = [
  {
    id: 1,
    nombre: "Chevrolet Blazer 2023",
    descripcion: "SUV moderna con diseño deportivo, tecnología avanzada y alto rendimiento.",
    precio: "38,000 USD",
    imagen: "https://imcruz-bolivia.s3.amazonaws.com/images/contents/2023-11-17-chevrolet_BLAZER_home_1000x1000.jpg?2023-11-17%2014:39:58",
  },
  {
    id: 2,
    nombre: "Chevrolet Onix 2023",
    descripcion: "Sedán compacto con conectividad inteligente y gran eficiencia de combustible.",
    precio: "18,500 USD",
    imagen: "https://imcruz-bolivia.s3.amazonaws.com/images/contents/2023-11-17-chevrolet_BLAZER_home_1000x1000.jpg?2023-11-17%2014:39:58",
  },
  {
    id: 3,
    nombre: "Chevrolet Colorado 2023",
    descripcion: "Camioneta robusta para trabajos pesados y aventuras off-road.",
    precio: "35,000 USD",
    imagen: "https://imcruz-bolivia.s3.amazonaws.com/images/contents/2023-11-17-chevrolet_BLAZER_home_1000x1000.jpg?2023-11-17%2014:39:58",
  },
  {
    id: 4,
    nombre: "Chevrolet Spark 2023",
    descripcion: "Auto compacto ideal para la ciudad, con diseño atractivo y gran eficiencia.",
    precio: "12,000 USD",
    imagen: "https://imcruz-bolivia.s3.amazonaws.com/images/contents/2023-11-17-chevrolet_BLAZER_home_1000x1000.jpg?2023-11-17%2014:39:58",
  },
  {
    id: 5,
    nombre: "Chevrolet Tahoe 2023",
    descripcion: "SUV de lujo con amplio espacio interior y gran capacidad de remolque.",
    precio: "55,000 USD",
    imagen: "https://imcruz-bolivia.s3.amazonaws.com/images/contents/2023-11-17-chevrolet_BLAZER_home_1000x1000.jpg?2023-11-17%2014:39:58",
  },
  {
    id: 6,
    nombre: "Chevrolet Camaro 2023",
    descripcion: "Deportivo icónico con diseño audaz y desempeño excepcional.",
    precio: "45,000 USD",
    imagen: "https://imcruz-bolivia.s3.amazonaws.com/images/contents/2023-11-17-chevrolet_BLAZER_home_1000x1000.jpg?2023-11-17%2014:39:58",
  },
];


// Función generateStaticParams
export async function generateStaticParams() {
  // Genera las rutas dinámicas para los productos
  return productos.map((producto) => ({
    id: producto.id.toString(), // Asegúrate de que id sea un string
  }));
}

function DetailPage({ params }) {
  const id = params.id; // Obtén el id desde los params

  console.log("ID del producto:", id);

  // Busca el producto correspondiente usando el ID
  const producto = productos.find((prod) => prod.id === parseInt(id)); // Convierte el id a número

  if (!producto) {
    return <p>Producto no encontrado.</p>; // Si no se encuentra el producto
  }

  return (
    <main className="">
      {/* Banner */}
      <section className="relative bg-fondo bg-cover bg-center text-white h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-rose-950 bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold drop-shadow-md">
            {producto.nombre}
          </h1>
        </div>
      </section>

      {/* Detalles del Producto */}
      <section className="py-12 px-4 md:px-16">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-96 object-cover rounded-t-lg"
            />
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-bold text-gray-800">
              {producto.nombre}
            </h2>
            <p className="text-gray-600 mt-4">{producto.descripcion}</p>
            <div className="mt-4">
              <span className="text-rose-700 font-bold text-xl">
                {producto.precio}
              </span>
            </div>
            <Button />
          </div>
        </div>
      </section>
    </main>
  );
}

export default DetailPage;
