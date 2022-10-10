import axios from 'axios';

const currentUrl = window.location.host.split(':');

const localhost = (currentUrl[0] === 'localhost') || (currentUrl[0] === '127.0.0.1');

let baseURL;
if(localhost) {
  const url = window.location.origin.split(':');
  const port = window.location.port;
  baseURL = port === '3000' ? `${url[0]}:${url[1]}:8000` : window.location.origin.toString();
} else {
  baseURL = `${window.location.origin.toString()}`;
}

const instance = axios.create({
  baseURL: `${baseURL}/api/`,
})

instance.defaults.headers.common['Authorization'] = 'Auth from instance';

export default instance;