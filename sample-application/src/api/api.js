import axios from 'axios';

// https://mockapi.io/projects/620d69fb20ac3a4eedc05e3b
const BASE_URL = "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/";

const API = axios.create({
    baseURL: BASE_URL
});

const REQ_TYPES = {
    GET: "get",
    POST: "post",
    PUT: "put",
    DELETE: "delete"
};

/**
 * params is { url, payload }
 */
const doRequest = ({ type, params }) => {
    return API[type](...params);
}

export { REQ_TYPES, doRequest };


