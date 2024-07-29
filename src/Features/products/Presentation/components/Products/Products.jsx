import Img1 from "../../../../../assets/women/pc2.jpeg";
import Img2 from "../../../../../assets/women/pc.jpeg";
import Img3 from "../../../../../assets/women/pc3.jpeg";
import Img4 from "../../../../../assets/women/pc4.jpeg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Procesador de última generación",
    rating: 5.0,
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Tarjeta gráfica avanzada",
    rating: 4.5,
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Memoria RAM de alta velocidad",
    rating: 4.7,
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Placa base",
    rating: 4.4,
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Disco SSD de alto rendimiento",
    rating: 4.5,
    aosDelay: "800",
  },
];

export const Products = () => {
  return (
    <div className="mt-14 mb-12 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Sección de cabecera */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Productos más vendidos para ti
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Productos
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Encuentra los mejores componentes para tu PC con descuentos increíbles. Calidad y rendimiento garantizados.
          </p>
        </div>
        {/* Sección del cuerpo */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Sección de tarjetas */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 flex flex-col items-center bg-white dark:bg-gray-800 p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[200px] w-full object-cover rounded-md"
                />
                <div className="text-center">
                  <h3 className="font-semibold text-sm">{data.title}</h3>
                  <p className="text-xs text-gray-600">{data.color}</p>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <FaStar className="text-yellow-400 text-sm" />
                    <span className="text-sm">{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Botón de ver todos */}
          <div className="flex justify-center mt-10">
            <button className="bg-primary hover:bg-primary-dark transition-colors duration-300 text-white py-2 px-5 rounded-md shadow-md">
              Ver todos los productos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

