import React, { useEffect, useContext } from "react";
import authContext from "../../context/autenticacion/authContext";
const Barra = () => {
  //extraer la informacion de autenticacion
  const authcontext = useContext(authContext);
  const { usuario, cerrarSesion, usuarioAuthenticado } = authcontext;

  useEffect(() => {
    usuarioAuthenticado();
    //eslint-disable-next-line
  }, []);

  return (
    <header className="app-header">
      {usuario ? (
        <p className="nombre-usuario">
          Hola <span>{usuario.nombre}</span>{" "}
        </p>
      ) : null}

      <nav className="nav-principal">
        <button
          className="btn btn-blank cerrar-sesion text-white"
          onClick={() => cerrarSesion()}
        >
          Cerra Sesión
        </button>
      </nav>
    </header>
  );
};

export default Barra;
