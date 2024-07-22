import React from "react";
import PropTypes from "prop-types";

const RegisterPopup = ({ open, onClose, onSave }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  };

  return (
    <>
      {open ? (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[90%] max-w-[600px]">
            <button
              className="absolute top-0 right-0 mt-4 mr-4 text-gray-500"
              onClick={onClose}
            >
              X
            </button>
            <h2 className="mb-4 text-2xl font-semibold text-center">
              Crear cuenta
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/3 px-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                    required
                  />
                </div>
                <div className="w-full md:w-1/3 px-2">
                  <label
                    htmlFor="lastname"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                    required
                  />
                </div>
                <div className="w-full md:w-1/3 px-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                    required
                  />
                </div>
                <div className="w-full md:w-1/3 px-2">
                  <label
                    htmlFor="dni"
                    className="block text-sm font-medium text-gray-700"
                  >
                    DNI
                  </label>
                  <input
                    type="text"
                    id="dni"
                    name="dni"
                    className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                  />
                </div>
                <div className="w-full md:w-1/3 px-2">
                  <label
                    htmlFor="calle"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Calle
                  </label>
                  <input
                    type="text"
                    id="calle"
                    name="calle"
                    className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                  />
                </div>
                <div className="w-full md:w-1/3 px-2">
                  <label
                    htmlFor="numero"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Número
                  </label>
                  <input
                    type="number"
                    id="numero"
                    name="numero"
                    className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                  />
                </div>
                <div className="w-full md:w-1/3 px-2">
                  <label
                    htmlFor="piso"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Piso
                  </label>
                  <input
                    type="number"
                    id="piso"
                    name="piso"
                    className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                  />
                </div>
                <div className="w-full md:w-1/3 px-2">
                  <label
                    htmlFor="ciudad"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Ciudad
                  </label>
                  <input
                    type="text"
                    id="ciudad"
                    name="ciudad"
                    className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                  />
                </div>
                <div className="w-full md:w-1/3 px-2">
                  <label
                    htmlFor="departamento"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Departamento
                  </label>
                  <input
                    type="text"
                    id="departamento"
                    name="departamento"
                    className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                  />
                </div>
                <div className="w-full md:w-1/3 px-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contraseña
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="block w-full px-4 py-2 mt-2 border from-primary to-secondary hover:scale-105 bg-gradient-to-r text-white rounded-full"
              >
                Registrarse
              </button>
              <button
                type="button"
                className="block w-full px-4 py-2 mt-2 border from-primary to-secondary hover:scale-105 bg-gradient-to-r text-white rounded-full"
                onClick={onClose}
              >
                Cancelar
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

RegisterPopup.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func,
};

export default RegisterPopup;
