export const ADICIONAR_USUARIO = "ADICIONAR_USUARIO";
export const INICIALIZAR_STORE = "INICIALIZAR_STORE";

export const adicionarUsuario = usuario => ({
  type: ADICIONAR_USUARIO,
  usuario
});

export const inicializarStoreUsuarios = usuarios => ({
  type: INICIALIZAR_STORE,
  usuarios
});