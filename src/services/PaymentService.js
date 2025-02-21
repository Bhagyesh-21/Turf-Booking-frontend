import axios from 'axios';

const API_URL = 'http://localhost:8082/api/payments';

class PaymentService {
    getPayments() {
        return axios.get(API_URL);
    }

    getPaymentById(id) {
        return axios.get(`${API_URL}/${id}`);
    }

    createPayment(payment) {
        return axios.post(API_URL, payment);
    }

    updatePayment(id, payment) {
        return axios.put(`${API_URL}/${id}`, payment);
    }

    deletePayment(id) {
        return axios.delete(`${API_URL}/${id}`);
    }
}

export default new PaymentService();
