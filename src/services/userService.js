import api from 'api';

class UserService {
  static login(user) {
    return api.post('Account/Login', user);
  }

  static logout() {
    return api.delete('Account/Logout');
  }

  static signUp(user) {
    return api.post('Account/create', user);
  }

  static getAccountData() {
    return api.get('Account');
  }

  static updateAccountData(newAccountData) {
    return api.put('Account/Modify', newAccountData);
  }
}

export default UserService;
