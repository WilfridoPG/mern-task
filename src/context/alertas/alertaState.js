import React, { useReducer } from "react";
import alertaReducer from "./alertaReducer";
import alertContext from "./alertaContext";
import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../../types";
const AlertaState = (props) => {
  const initialState = {
    alerta: null,
  };
  const [state, dispatch] = useReducer(alertaReducer, initialState);
  //funciones mostra
  const mostrarAlerta = (msg, categoria) => {
    dispatch({
      type: MOSTRAR_ALERTA,
      payload: {
        msg,
        categoria,
      },
    });
    //limar la alerta
    setTimeout(() => {
      dispatch({
        type: OCULTAR_ALERTA,
      });
    }, 5000);
  };
  return (
    <alertContext.Provider value={{ alerta: state.alerta, mostrarAlerta }}>
      {props.children}
    </alertContext.Provider>
  );
};
export default AlertaState;
