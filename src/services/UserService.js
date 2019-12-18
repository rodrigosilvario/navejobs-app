const url = 'http://my-json-server.typicode.com/rodrigosilvario/dbNaveJobs/users'

class UserService {
  
  static getAllUsers() {
    return fetch(url).then(response => {
      return response.json()
    }).catch(error => {
      return error
    });
  }
}

export default UserService
