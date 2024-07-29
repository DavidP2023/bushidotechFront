import { useState } from "react";
import Logo from "../../assets/logob.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import PopupInitSession from "../Popup/PopupInitSession";
import Popup from "../Popup/Popup";

const Menu = [
  {
    id: 1,
    name: "Acerca de nosotros",
    link: "/#",
  },
  {
    id: 2,
    name: "Contáctanos",
    link: "/#Contactanos",
  },
  {
    id: 3,
    name: "Métodos de pago",
    link: "/#Metodos de pago",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Inicio",
    link: "/#",
  },
  {
    id: 2,
    name: "Procesadores",
    link: "/#procesadores",
  },
  {
    id: 3,
    name: "Tarjetas Gráficas",
    link: "/#tarjetas-graficas",
  },
  {
    id: 4,
    name: "Placas Base",
    link: "/#placas-base",
  },
  {
    id: 5,
    name: "Periféricos",
    link: "/#perifericos",
  },
];

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="shadow-md bg-orange-500 dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Navbar Superior */}
      <div className="bg-primary/40 py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="w-12 mr-2" />
            <a href="#" className="font-bold text-2xl sm:text-4xl text-white dark:text-gray-200">
              BushidoTech
            </a>
          </div>

          {/* Barra de Búsqueda */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Buscar"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Botón de Orden */}
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-orange-500 to-orange-700 transition-all duration-200 text-white py-2 px-4 rounded-lg flex items-center gap-2 group hover:from-orange-600 hover:to-orange-800 transform hover:scale-105"
            >
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              <span className="hidden sm:block group-hover:inline-block">Ordenar</span>
            </button>

            {/* Cambio de Modo Oscuro */}
            <div>
              <DarkMode />
            </div>

            {/* Botón de Iniciar Sesión */}
            <button
              className="bg-gradient-to-r from-orange-500 to-orange-700 transition-all duration-200 text-white py-2 px-4 rounded-lg flex items-center gap-2 group hover:from-orange-600 hover:to-orange-800 transform hover:scale-105"
              onClick={handleShowModal}
            >
              <FaUser className="text-xl text-white drop-shadow-sm cursor-pointer" />
              <span className="hidden sm:block group-hover:inline-block">Iniciar sesión</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navbar Inferior */}
      <div className="bg-primary/30 py-2">
        <div className="container mx-auto flex justify-center">
          <ul className="sm:flex hidden items-center gap-6">
            {Menu.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="text-white dark:text-gray-200 px-4 py-2 hover:text-orange-300 transition duration-200"
                >
                  {data.name}
                </a>
              </li>
            ))}
            {/* Dropdown Simple y Links */}
            <li className="group relative cursor-pointer">
              <a href="#" className="flex items-center gap-[2px] py-2 text-white dark:text-gray-200 hover:text-orange-300 transition duration-200">
                Productos Populares
                <FaCaretDown className="ml-1 transition duration-200 group-hover:rotate-180" />
              </a>
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 z-50 hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-lg">
                <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="block w-full rounded-md p-2 hover:bg-orange-200 transition duration-200"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      <PopupInitSession showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Navbar;
