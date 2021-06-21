import axios from "axios";
import config from "./config.json";

if (typeof window !== "undefined") {
  axios.defaults.baseURL = `http://localhost:5000/api/v1`;
  const token = localStorage.getItem(config.local_storage.token);
  axios.defaults.headers.common["Authorization"] = token ? `Bearer ${token}` : "";
} else {
  console.log("we are running on the server");
}

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // TODO: handle 401s
    // if (error.response.status == 401) {
    //   router.replace('/login')
    // }
    // handleErrorMessage
    return Promise.reject(error);
  }
);

export default axios;
