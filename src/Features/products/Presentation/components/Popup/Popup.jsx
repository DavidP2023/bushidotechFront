import { IoCloseOutline } from "react-icons/io5";
import Logo from "../../assets/logob.png"; // Asegúrate de importar el logo

export const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-lg bg-white dark:bg-gray-900 rounded-md duration-300 w-[300px] relative">
              {/* Botón de cierre */}
              <div className="absolute top-2 right-2">
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => setOrderPopup(false)}
                />
              </div>
              {/* Logo en el medio */}
              <div className="flex justify-center mb-4">
                <img src={Logo} alt="Logo" className="w-16" />
              </div>
              {/* header */}
              <div className="text-center">
                <h1 className="text-lg font-bold">Realizar Pedido</h1>
              </div>
              {/* form section */}
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full rounded border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <input
                  type="email"
                  placeholder="Correo Electrónico"
                  className="w-full rounded border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <input
                  type="text"
                  placeholder="Dirección"
                  className="w-full rounded border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <div className="flex justify-center">
                  <button className="bg-orange-500 hover:bg-orange-600 duration-200 text-white py-2 px-4 rounded shadow-md">
                    Ordenar Ahora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

