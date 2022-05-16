import axios from 'axios'


axios.defaults.withCredentials = false;

export const endpoints = {
    "oauth2-info": "/oauth2-info",
    "login": "/o/token/",
    "current-user": "/users/current-user"
}

export default axios.create({
    baseURL: "http://localhost:8000/"
})