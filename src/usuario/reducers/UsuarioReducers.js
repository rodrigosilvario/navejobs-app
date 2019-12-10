import { ADICIONAR_USUARIO, INICIALIZAR_STORE} from "../actions/UsuarioActions";

const initialState = {
  usuarios: []
}


export const UsuarioReducer = (state = initialState, action) => {
  switch (action.type) {
    case INICIALIZAR_STORE:
      return {
          ...state,
          usuarios: action.usuarios
      }
    case ADICIONAR_USUARIO:
     // if (state.usuarios.find(p => p.id === action.usuario.id)) {
       // return state;
      //}
      return {
        ...state,
        usuarios: state.usuarios.concat(action.usuario)
      }
    default:
      return state;
  }
}