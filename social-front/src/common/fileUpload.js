import axios from "./axiosConfig";

export const singleFileUpload = async data => {
  try {
    await axios.post("/images/singleFile", data);
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
    const { data } = await axios.get("/images/getSingleFiles", {
      params: info
    });
    console.log("data", data);
    return data;
  } catch (error) {
    throw error;
  }
};

export const multipleFilesUpload = async data => {
  try {
    console.log("manhnt", data);
    await axios.post("/images/imgTimelineUploads", data);
  } catch (error) {
    throw error;
  }
};

export const getMultipleFiles = async () => {
  try {
    const info = {
      type: "timeline",
      file_id: "user-2"
    };
    const { data } = await axios.get("/images/imgTimeLines", {
      params: info
    });
    return data;
  } catch (error) {
    throw error;
  }
};
