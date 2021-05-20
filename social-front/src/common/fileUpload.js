import axios from "./axiosConfig";

export const singleFileUpload = async data => {
  try {
    await axios.post("/avatar/singleFile", data);
    console.log("done");
  } catch (error) {
    throw error.response;
  }
};
export const getSingleFiles = async () => {
  try {
    const info = {
      type: "avatar",
      file_id: "user-2"
    };
    const { data } = await axios.get("/avatar/getSingleFiles", {
      params: info
    });
    console.log("data", data);
    return data;
  } catch (error) {
    throw error;
  }
};
