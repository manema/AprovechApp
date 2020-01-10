import api from 'api';

class DiscountService {
  static getDiscount() {
    return api.get('Discounts');
  }
}

export default DiscountService;