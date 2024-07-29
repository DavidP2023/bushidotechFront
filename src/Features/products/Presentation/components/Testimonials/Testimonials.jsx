import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Laura M.",
    text: "¡Estoy impresionada con la rapidez de entrega y la calidad del servicio al cliente! Compré mi nueva tarjeta gráfica aquí y no podría estar más feliz.",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Carlos G.",
    text: "Desde que descubrí esta tienda, no he comprado en ningún otro lado. Siempre tienen los mejores precios y una gran variedad de productos.",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "María R.",
    text: "Mi computadora necesitaba una actualización urgente y encontré todo lo que necesitaba aquí. El proceso de compra fue sencillo y rápido.",
    img: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "Javier S.",
    text: "Excelente experiencia de compra. Recibí mi pedido en perfectas condiciones y el equipo de atención al cliente respondió todas mis dudas.",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

export const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-16 mb-10 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-12 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Lo que dicen nuestros clientes
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonios
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-500 dark:text-gray-300">
            Descubre lo que nuestros clientes tienen que decir sobre nosotros.
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6" key={data.id}>
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-white relative">
                  <div className="mb-4 flex justify-center">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-20 h-20 border-2 border-primary"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3 text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400">{data.text}</p>
                      <h1 className="text-lg font-semibold text-black dark:text-white">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/10 dark:text-white/10 text-9xl font-serif absolute top-0 right-0">
                    “
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
