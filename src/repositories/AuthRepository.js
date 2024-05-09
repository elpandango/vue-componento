import Axios from './Clients/AxiosClient';
const resource = '/auth';
export default {
    login(payload) {
        return Axios.post(`${resource}/login`, payload);
    },
    signup(payload) {
        return Axios.put(`${resource}/signup`, payload);
    }
};
