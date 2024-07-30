<<<<<<< HEAD:src/components/Popup/PopupInitSession.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import RegisterPopup from "./RegisterPopup";
import logo from "../../assets/logob.png"; 
=======
import PropTypes, { string } from "prop-types";
import { RegisterPopup } from "./RegisterPopup";
import { usepopupSessionshook } from "../../hooks/use_popupSessions_hook";
>>>>>>> 10a349db213714ca265bc3313b6f68b489570d67:src/Features/products/Presentation/components/Popup/PopupInitSession.jsx


export const PopupInitSession = ({showModal, setShowModal, setShowRegisterModal}) => {

  const { 
    handleRegisterClick, 
    handleSubmit, 
    handleChange, 
    handleBlur, 
    values, 
    errors, 
    touched,
   
  } = usepopupSessionshook( showModal, setShowModal)


  return (
    <>
      {showModal && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-lg bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
            <button
              className="absolute top-0 right-0 mt-4 mr-4 text-gray-500"
              onClick={() => setShowModal(false)}
            >
              X
            </button>
            <div className="mb-4 flex justify-center">
              <img src={logo} alt="Logo" className="h-12" /> {/* Ajusta la altura según sea necesario */}
            </div>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Dirección de correo electrónico
                </label>
                <input
                  name="email"
                  onBlur={handleBlur('email')}
                  onChange={handleChange('email')}
                  value={values.email}
                  type="email"
                  id="email"
<<<<<<< HEAD:src/components/Popup/PopupInitSession.jsx
                  className="w-full rounded border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
=======
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-2"
>>>>>>> 10a349db213714ca265bc3313b6f68b489570d67:src/Features/products/Presentation/components/Popup/PopupInitSession.jsx
                  required
                />
                {
                  errors && errors.email && touched.email && 
                  <p className="text-xs text-red-600 font-semibold text-center ">
                    
                    {errors.email}
                  </p>
                }
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contraseña
                </label>
                <input
                  name="password"
                  type="password"
                  id="password"
<<<<<<< HEAD:src/components/Popup/PopupInitSession.jsx
                  className="w-full rounded border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
=======
                  onChange={handleChange('password')}
                  value={values.password}
                  onBlur={handleBlur('password')}
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
>>>>>>> 10a349db213714ca265bc3313b6f68b489570d67:src/Features/products/Presentation/components/Popup/PopupInitSession.jsx
                  required
                />
                  {
                  errors && errors.password && touched.password && 
                  <p className="text-xs text-red-600 font-semibold text-center ">
                    
                    {errors.password}
                  </p>
                }
              </div>
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-sm text-orange-600 hover:text-orange-500"
                >
                  ¿Has olvidado tu contraseña?
                </a>
              </div>
              <button
<<<<<<< HEAD:src/components/Popup/PopupInitSession.jsx
                type="submit"
                className="block w-full px-4 py-2 mt-2 bg-orange-500 hover:bg-orange-600 text-white rounded shadow-md duration-200"
=======
                type="button"
                className="block w-full px-4 py-2 mt-2 border from-primary to-secondary hover:scale-105 bg-gradient-to-r text-white rounded-full"
                onClick={handleSubmit}

>>>>>>> 10a349db213714ca265bc3313b6f68b489570d67:src/Features/products/Presentation/components/Popup/PopupInitSession.jsx
              >
                Iniciar sesión
              </button>
              <button
                type="button"
<<<<<<< HEAD:src/components/Popup/PopupInitSession.jsx
                className="block w-full px-4 py-2 mt-2 bg-orange-500 hover:bg-orange-600 text-white rounded shadow-md duration-200"
                onClick={handleRegisterClick}
=======
                className="block w-full px-4 py-2 mt-2 border from-primary to-secondary hover:scale-105 bg-gradient-to-r text-white rounded-full"
                onClick={()=> {setShowRegisterModal(true)
                  setShowModal(false)
                }}
>>>>>>> 10a349db213714ca265bc3313b6f68b489570d67:src/Features/products/Presentation/components/Popup/PopupInitSession.jsx
              >
                Registrarse
              </button>
            </form>
          </div>
        </div>
      )}
    
    </>
  );
};



