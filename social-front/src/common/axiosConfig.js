import axios from "axios";

axios.defaults.baseURL = `http://localhost:5000/api/v1`;
const token = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = token ? `Bearer ${token}` : "";

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
