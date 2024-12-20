function Home() {

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
  
  return (
    <main className="">
      {/* Banner */}
      <section className="relative bg-fondo bg-cover bg-center text-white h-screen flex items-center justify-center">
     
        <div className="absolute inset-0 bg-rose-950 bg-opacity-50"></div>
  
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold drop-shadow-md">
            Conduce con Estilo y Seguridad
          </h1>
          <p className="mt-4 text-lg max-w-2xl  font-medium">
            Descubre nuestra colección de autos únicas con detalles de ultima tecnologia,
            hechas con seguridad y confort.
          </p>
          <button className="mt-8 px-4 py-2 bg-white text-rose-700 font-semibold rounded-full shadow-lg hover:bg-gray-200">
            Ver autos
          </button>
        </div>
      </section>

      {/* Sección de Productos */}
      <section className="py-12  px-4 md:px-16 ">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Descubre Nuestra Colección
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Cada auto está diseñada para combinar la moda moderna con tecnologia de ultima ¡Encuentra tu estilo ideal!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productos.map((producto) => (
              <div
                key={producto.id}
                className="bg-white  rounded-lg shadow-md hover:shadow-lg transition duration-300 "
              >
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-96 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {producto.nombre}
                  </h3>
                  <p className="text-gray-600 mt-2">{producto.descripcion}</p>
                  <div className="mt-4 flex justify-center items-center">
                 
                
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
