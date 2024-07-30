  import footerLogo from "../../assets/logob.png";
  import Banner from "../../assets/website/footer.avif";
  import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
  } from "react-icons/fa";

  const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  const FooterLinks = [
    {
      title: "Inicio",
      link: "/#",
    },
    {
      title: "Nosotros",
      link: "/#nosotros",
    },
    {
      title: "Contacto",
      link: "/#contacto",
    },
    {
      title: "Blog",
      link: "/#blog",
    },
  ];

  const Footer = () => {
    return (
      <div style={BannerImg} className="text-white">
        <div className="container backdrop-blur-sm bg-black/70 py-12">
          <div data-aos="zoom-in" className="grid md:grid-cols-3 gap-8">
            {/* detalles de la empresa */}
            <div className="py-8 px-4">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-center mb-3 flex items-center gap-3">
                <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
                BushidoTech
              </h1>
              <p className="text-gray-300 text-justify">
                Encuentra los mejores componentes de PC a precios competitivos.
                Garantía de calidad y servicio al cliente excepcional.
              </p>
            </div>

            {/* Enlaces del Footer */}
            <div className="grid grid-cols-2 gap-6">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-lg font-bold sm:text-left text-center mb-3">
                  Enlaces Importantes
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-400"
                      key={link.title}
                    >
                      <a href={link.link}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-lg font-bold sm:text-left text-center mb-3">
                  Enlaces
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-400"
                      key={link.title}
                    >
                      <a href={link.link}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* enlaces sociales y contacto */}
            <div className="py-8 px-4 text-center md:text-left">
              <h1 className="sm:text-xl text-lg font-bold mb-3">Contáctanos</h1>
              <div className="flex justify-center md:justify-start gap-3 mb-6">
                <a href="#">
                  <FaInstagram className="text-2xl hover:text-primary transition duration-300" />
                </a>
                <a href="#">
                  <FaFacebook className="text-2xl hover:text-primary transition duration-300" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-2xl hover:text-primary transition duration-300" />
                </a>
              </div>
              <div className="text-gray-400">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                  <FaLocationArrow />
                  <p>Argentina, CBA</p>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <FaMobileAlt />
                  <p>+52 123456789</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500 mt-8">
            &copy; 2024 BushidoTech. Todos los derechos reservados.
          </div>
        </div>
      </div>
    );
  };

  export default Footer;
