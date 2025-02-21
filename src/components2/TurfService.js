// import axios from 'axios';

// const BASE_URL = 'http://localhost:8088/api/turfs';

// class TurfService {
//   getTurfs() {
//     return axios.get(BASE_URL);
//   }

//   getTurfById(turfId) {
//     return axios.get(`${BASE_URL}/${turfId}`);
//   }

//   createTurf(turf) {
//     return axios.post(BASE_URL, turf);
//   }

//   updateTurf(turf, turfId) {
//     return axios.put(`${BASE_URL}/${turfId}`, turf);
//   }

//   deleteTurf(turfId) {
//     return axios.delete(`${BASE_URL}/${turfId}`);
//   }
// }

// export default new TurfService();




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
