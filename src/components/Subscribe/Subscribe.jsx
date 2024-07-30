import Banner from "../../assets/website/orange-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-16">
        <div className="bg-white dark:bg-gray-900 bg-opacity-70 dark:bg-opacity-70 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold mb-6">
            Recibe Notificaciones sobre Nuevos Productos
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Ingresa tu correo electrónico"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
          />
          <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 duration-300 text-white py-3 rounded-md transition">
            Suscribirse
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
