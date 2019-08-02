import Axios from "axios";

const instance = Axios.create({
    baseURL: 'http://gateway.marvel.com',
})

instance.interceptors.request.use(request => {

    //console.log('%c Request', 'font-size: 20px; color: lightblue', request);
    return request;
}, error => {
    //console.log('%c Request error', 'font-size: 20px; color: crimson', error);
    return Promise.reject(error)

})

instance.interceptors.response.use(response => {
    // console.log('%c Response', 'font-size: 20px; color: lightgreen', response);
    return response;
}, error => {
    // console.log('%c Response error', 'font-size: 20px; color: crimson', error);
    return Promise.reject(error)

})
export default instance