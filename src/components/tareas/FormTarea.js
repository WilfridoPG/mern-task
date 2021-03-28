import React, { useContext, useState, useEffect } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const FormTarea = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  const tareasContext = useContext(tareaContext);
  const {
    tareaseleccionada,
    errortarea,
    obtenerTareas,
    agregarTarea,
    validarTarea,
    actualizarTarea,
    limpiarTarea,
  } = tareasContext;

  //efec detecta si hay una tarea seleccionada

  useEffect(() => {
    if (tareaseleccionada !== null) {
      guardarTarea(tareaseleccionada);
    } else {
      guardarTarea({ nombre: "" });
    }
  }, [tareaseleccionada]);
  //state

  const [tarea, guardarTarea] = useState({
    nombre: "",
  });

  //extrae el nombre del proeycto

  const { nombre } = tarea;

  //si no hay proyecto seleccionado
  if (!proyecto) return null;
  //Array destrcucturing extraer el proyecto actual
  console.log("nombre del proyeto", proyecto);
  const [proyectoActual] = proyecto;

  //leer los valores del formulario
  const handleChange = (e) => {
    guardarTarea({ ...tarea, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    //validar
    if (nombre.trim() === "") {
      validarTarea();
      return;
    }
    //pasar la validadcion
    if (tareaseleccionada === null) {
      //agreaga tarea a state de tareas
      tarea.proyecto = proyectoActual._id;
      tarea.estado = true;
      agregarTarea(tarea);
    } else {
      //actualizar tarea exisittente

      actualizarTarea(tarea);
      //limpia la tarea
      limpiarTarea();
    }

    //obtener tareas y filtrar las tareas del proyecto actual
    obtenerTareas(proyectoActual.id);
    //reiniciar el form
    guardarTarea({ nombre: "" });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea"
            name="nombre"
            value={nombre}
            onChange={handleChange}
          ></input>
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value={
              tareaseleccionada !== null ? "Editar Tarea" : "Agregar Tarea"
            }
          ></input>
        </div>
      </form>
      {errortarea ? (
        <p className="mensaje error">Nombre de la tarea es obligatorio</p>
      ) : null}
    </div>
  );
};

export default FormTarea;
