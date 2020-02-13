import api from 'api';

class InterestService {
  static getInterests() {
    return api.get('Interests');
  }

  static getUserInterests() {
    return api.get('IU');
  }

  static addInterestToUser(interestId) {
    return api.post('IU', interestId);
  }

  static deleteInterestToUser(interestId) {
    return api.delete('IU', interestId);
  }
}

export default InterestService;
