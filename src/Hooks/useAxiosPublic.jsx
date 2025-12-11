import axios from "axios";

const productionUrl = "https://crazy-contest-server.vercel.app";
const developmentUrl = "http://localhost:3000";

const baseURL =
  window.location.hostname === "localhost" ? developmentUrl : productionUrl;

const axiosPublic = axios.create({
  baseURL: baseURL,
  withCredentials: false,
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
