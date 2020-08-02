import axios from 'axios'

let http = axios.create({
    baseURL:"/api"
})

http.interceptors.request.use(function (config) {
    config.headers.authorization = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).token : {}
    return config;
});

http.interceptors.response.use((res)=>{
    return res;
})



export default http