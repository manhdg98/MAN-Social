import axios from "./axiosConfig"

export const singleFileUpload = async data => {
  try {
    await axios.post("/images/singleFile", data);
  } catch (error) {
    throw error.response
  }
}

export const getSingleFiles = async () => {
  try {
    const info = {
      type: "avatar",
      file_id: "user-1"
    };
    const { data } = await axios.get("/images/getSingleFiles", {
      params: info
    });
    return data;
  } catch (error) {
    throw error
  }
};

export const multipleFilesUpload = async data => {
  try {
    await axios.post("/images/imgTimelineUploads", data);
  } catch (error) {
    throw error;
  }
};

export const getMultipleFiles = async () => {
  try {
    const info = {
      type: "avatar",
      file_id: "user-3"
    };
    const { data } = await axios.get("/images/imgTimeLines", {
      params: info
    });
    return data;
  } catch (error) {
    throw error;
  }
};
