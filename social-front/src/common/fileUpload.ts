import axios from "./axiosConfig";

export const singleFileUpload = async data => {
  let res;
  try {
    res = await axios.post("/images/singleFile", data);
  } catch (error) {
    res = error;
    throw error.response;
  }
  return res;
};

export const getSingleFiles = async (type_img, user_id) => {
  try {
    const info = {
      type: type_img,
      file_id: user_id
    };
    const { data } = await axios.get("/images/getSingleFiles", {
      params: info
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const multipleFilesUpload = async data => {
  try {
    await axios.post("/images/imgTimelineUploads", data);
  } catch (error) {
    throw error;
  }
};

export const getMultipleFiles = async (type_img, user_id) => {
  try {
    const info = {
      type: type_img,
      file_id: user_id
    };
    const { data } = await axios.get("/images/getAllSingleFiles", {
      params: info
    });
    return data;
  } catch (error) {
    throw error;
  }
};
