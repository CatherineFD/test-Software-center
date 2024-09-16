import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'https://api.caiman-app.de/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default {
    getListCars(search = '2323', perPage = 9, page = 1) {
        return axiosApi.get('/cars-test', {
            params: {
                per_page: perPage,
                page: page
            }
        });
    }
}