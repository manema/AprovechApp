import api from 'api';

class CommercesService {
  static getCommerces() {
    return api.get('Commerce');
  }
}

export default CommercesService;