import axios from 'axios';
import AuthHeader from './Auth-Header';

const URL_SERVER = process.env.REACT_APP_URL_SERVER + ":" + process.env.REACT_APP_PORT_SERVER

class Service {
    login(email, password, privilege) {
        return axios.post(URL_SERVER + "/api/login", {email, password, privilege}, {});
    }
}

export default new Service();