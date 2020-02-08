import api from 'api';

class QRService {
  static getAllQr() {
    return api.get('/QrCode');
  }

  static createQr(discountId, idCommerce) {
    return api.get(`/QrCode/CreateQR?idDiscount=${discountId}&idCommerce=${idCommerce}`);
  }

  static getQr(qrId) {
    return api.get(`/QrCode/GetQRId/${qrId}`);
  }
}

export default QRService;