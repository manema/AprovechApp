import api from 'api';

class QRService {
  static getAllQr() {
    return api.get('/QrCode');
  }

  static createQr(discountId) {
    return api.get(`/QrCode/${discountId}`);
  }

  static getQr(qrId) {
    return api.get(`/QrCode/GetQRId/${qrId}`);
  }
}

export default QRService;