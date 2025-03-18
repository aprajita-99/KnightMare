import axios from 'axios';
const api = axios.create({
    baseURL:`${import.meta.env.VITE_BACKEND_URL}/api/auth/googleLogin`,
});
export const googleAuth = (code) => api.get(`/google?code=${code}`);