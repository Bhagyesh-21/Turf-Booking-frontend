import axios from 'axios';

const BASE_URL = 'http://localhost:8088/api/turfs';

class TurfService {
    createTurf(turf) {
        return axios.post(BASE_URL, turf, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    // Other methods (getTurfs, getTurfById, updateTurf, deleteTurf) can be added here
}

export default new TurfService();
