const url = 'http://my-json-server.typicode.com/rodrigosilvario/dbNaveJobs/users'

export default class UsuarioAPI {
  
  static getUsuarios() {
    const response = fetch(url)
    .then(response => {
        return response.json()
    })

    return response
  }
}
