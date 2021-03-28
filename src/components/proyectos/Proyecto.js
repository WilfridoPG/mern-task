import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const Proyecto = ({ proyecto }) => {
  //state del context
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;

  //state tareas del context
  const tareasContext = useContext(tareaContext);
  const { obtenerTareas } = tareasContext;

  //funcion para agregar el proyecto acutal
  const seleccionarProyecto = (id) => {
    proyectoActual(id); //fijar el proyecto actual
    obtenerTareas(id);
  };
  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(proyecto._id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
