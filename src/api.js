import axios from "axios";
const api=axios.create({baseURL:import.meta.env.VITE_API_URL||"http://localhost:8080/api"});
api.interceptors.request.use(config=>{const token=localStorage.getItem("locallaunch_token");const publicRequest=config.url?.includes("/public/")||config.url==="/users/login"||config.url==="/users/register";if(token&&!publicRequest)config.headers.Authorization=`Bearer ${token}`;return config;});
export default api;
