import api from 'api';

class InterestService {
  static getInterests() {
    return api.get('Interests');
  }
}

export default InterestService;
