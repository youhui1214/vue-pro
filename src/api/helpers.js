import axios from "axios";

// const baseURL = 'http://localhost:8080/';
const baseURL = '';

let service = axios.create({
    baseURL: baseURL,
    // withCredentials: true,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    timeout: 5000,
    /*transformRequest: [function (data) {
        let newData = '';
        for (let k in data) {
            if (data.hasOwnProperty(k) === true) {
                newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
            }
        }
        return newData;
    }]*/
});

export default service



