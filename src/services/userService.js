import api from 'api';

class UserService {
  static login(user) {
    return api.post('Account/Login', user);
  }

  static logout() {
    return api.delete('/users/sign_out');
  }

  static signUp(user) {
    return api.post('Account/create', user);
  }
}

export default UserService;
