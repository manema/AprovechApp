import api from 'api';

class CommercesService {
  static getCommerces() {
    return api.get('Commerce');
  }

  static getCommercesByInterest(id) {
    return api.get(`/Commerce/GetByInterest/${id}`);
  }
}

export default CommercesService;