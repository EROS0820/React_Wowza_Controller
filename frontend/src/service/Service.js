import axios from 'axios';
import AuthHeader from './Auth-Header';

const URL_SERVER = process.env.REACT_APP_URL_SERVER + ":" + process.env.REACT_APP_PORT_SERVER

class Service {
    login(email, password) {
        return axios.post(URL_SERVER + "/api/auth/login", {email, password}, {});
    }
    get_stream_list() {
        return axios.get(URL_SERVER + "/api/admin/stream_list", {}, {headers: AuthHeader()})
    }
    delete_stream(id) {
        return axios.delete(URL_SERVER + "/api/admin/stream", {}, {headers: AuthHeader()});
    }
    add_stream(id) {
        return axios.post(URL_SERVER + "/api/admin/stream", {}, {headers: AuthHeader()});
    }
    edit_stream(id) {
        return axios.put(URL_SERVER + "/api/admin/stream", {}, {headers: AuthHeader()});
    }
}

export default new Service();