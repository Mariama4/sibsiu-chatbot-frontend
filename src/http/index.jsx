import axios from "axios";
const uri = import.meta.env.VITE_APP_API_URL;

const Host = axios.create({
  baseURL: uri,
});

const AuthHost = axios.create({
  baseURL: uri,
});

const authIntercaptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

AuthHost.interceptors.request.use(authIntercaptor);

export { Host, AuthHost };
