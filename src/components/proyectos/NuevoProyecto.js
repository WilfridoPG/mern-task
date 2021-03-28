import React, { useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
  //obtener el esta del formilario
  const proyectosContext = useContext(proyectoContext);
  const {
    formulario,
    mostrarFormulario,
    errorformulario,
    agregarProyecto,
    mostrarError,
  } = proyectosContext;
  console.log("---> datos del formulario", formulario);
  //state para proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });
  //estraer el nombre del proyecto
  const { nombre } = proyecto;
  const onChangeProyecto = (e) => {
    guardarProyecto({ ...proyecto, [e.target.name]: e.target.value });
  };
  //cuando el usuario envia un proyecto
  const onSubmitProyecto = (e) => {
    e.preventDefault();
    //validar proyecto
    if (nombre === "") {
      mostrarError();
      return;
    }
    //agregar a state corecto
    agregarProyecto(proyecto);
    //reiniciarl el proyecto
    guardarProyecto({ nombre: "" });
  };
  const onClickFormulario = () => {
    mostrarFormulario();
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onClickFormulario}
      >
        Nuevo Proyect
      </button>

      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            value={nombre}
            onChange={onChangeProyecto}
          ></input>

          <input
            type="submit"
            className="btn btn-primario btn-block"
            placeholder="Nombre Proyecto"
            value="Agregar Proyecto"
          ></input>
        </form>
      ) : null}
      {errorformulario ? (
        <p className="mensaje error">El nombre del proyecto es obligatorio</p>
      ) : null}
    </>
  );
};

export default NuevoProyecto;
