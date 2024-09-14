import React, { useState, useEffect, ReactNode } from "react";
import { Link } from "react-router-dom";

interface SideBarProps {
  children?: ReactNode;
}

export default function SideBar({ children }: SideBarProps) {
  const [esVisible, setEsVisible] = useState(() => {
    const cambiarEstado = localStorage.getItem("persistirDato");
    return cambiarEstado ? JSON.parse(cambiarEstado) : false;
  });
  
    useEffect(() => {
        localStorage.setItem("persistirDato", convertir(esVisible));
    }, [esVisible]);
  let convertir = (value: boolean) => {
    let convertido = value.toString();
    return convertido;
  };

  

  const toggleMenu = () => {
    setEsVisible(!esVisible);
  };

  return (
    <div className="flex">
      <div className="fixed top-3 left-4 z-50">
        <button
          className={`${
            esVisible ? "text-white" : "text-black"
          } transition-colors duration-800`}
          type="button"
          onClick={toggleMenu}
          aria-controls="drawer-navigation"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
          <span className="sr-only">Abrir Sidebar</span>
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${
          esVisible ? "translate-x-0" : "-translate-x-full"
        } bg-white dark:bg-gray-800`}
        tabIndex={esVisible ? 0 : -1}
        aria-labelledby="drawer-navigation-label"
      >
        <button
          type="button"
          onClick={toggleMenu}
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Cerrar Menu</span>
        </button>

        <div className="py-4 overflow-y-auto mt-4">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/Formulario"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Formulario</span>
              </Link>
            </li>
          </ul>
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/FormularioBD"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Formulario Base de Datos</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${
          esVisible ? "ml-72 mt-4 mr-14" : "ml-8 mt-4 mr-14"
        } w-full p-4 justify-center items-center`}
      >
        {children}
      </div>
    </div>
  );
}
