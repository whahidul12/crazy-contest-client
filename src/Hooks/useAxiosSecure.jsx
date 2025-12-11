import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect } from "react";

const productionUrl = "https://crazy-contest-server.vercel.app";
const developmentUrl = "http://localhost:3000";

const baseURL =
  window.location.hostname === "localhost" ? developmentUrl : productionUrl;

const axiosSecure = axios.create({
  baseURL: baseURL,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  useEffect(() => {
    // Request Interceptor: Add Token
    const requestInterceptor = axiosSecure.interceptors.request.use(
      function (config) {
        const token = localStorage.getItem("access-token");
        if (token) {
          config.headers.authorization = `Bearer ${token}`;
        }
        return config;
      },
      function (error) {
        return Promise.reject(error);
      },
    );

    // Response Interceptor: Handle 401/403
    const responseInterceptor = axiosSecure.interceptors.response.use(
      function (response) {
        return response;
      },
      async (error) => {
        const status = error.response ? error.response.status : null;
        if (status === 401 || status === 403) {
          await logOut();
          navigate("/login");
        }
        return Promise.reject(error);
      },
    );

    // Cleanup interceptors on unmount (optional but good practice)
    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [logOut, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
