import axios from 'axios';

const token = localStorage.getItem('token');
export const API_URL = import.meta.env.VITE_API_URL;

console.log('env: ', import.meta.env.VITE_APP_TITLE); // "My App (Development)" or "My App (Production)"

export const CarApi = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

export const checkToken = (setUser, navigate, toast) => {
  CarApi.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    if (error.response.status === 401) {

      console.log('error 401', Date.now);
      localStorage.removeItem('token');
      toast.error('Sesión expirada')

      //setUser()
      navigate('/login')
      return

    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
}

CarApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
}, (error) => {

  return Promise.reject(error);
});

