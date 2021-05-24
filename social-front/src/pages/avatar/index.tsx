import React, { useEffect, useState } from "react";
import Page from "components/layout/Page";
import {
  singleFileUpload,
  getSingleFiles,
  multipleFilesUpload,
  getMultipleFiles
} from "../../common/fileUpload";

const Index = props => {
  const [avatar, setAvatar] = useState("");
  const [singleFiles, setSingleFiles] = useState([]);
  const [multipleFiles, setMultipleFiles] = useState([]);

  const singleAvatar = e => {
    setAvatar(e.target.files[0]);
  };

  const MultipleFileChange = e => {
    setMultipleFiles(e.target.files);
  };

  const uploadAvatar = async () => {
    let formData = new FormData();
    formData.append("type", "avatar");
    formData.append("file_id", "user-1");
    formData.append("file", avatar);
    await singleFileUpload(formData);
  };

  const getSingleFileslist = async () => {
    try {
      const fileslist = await getSingleFiles();
      setSingleFiles(fileslist);
      //   const fileslist = await getMultipleFiles();
      //   setMultipleFiles(fileslist);
    } catch (error) {
      console.log(error.response);
    }
  };

  const UploadMultipleFiles = async () => {
    const formData = new FormData();
    formData.append("type", "avatar");
    formData.append("file_id", "user-3");
    for (let i = 0; i < multipleFiles.length; i++) {
      formData.append("files", multipleFiles[i]);
    }
    await multipleFilesUpload(formData);
  };

  const getMultipleFilesList = async () => {
    try {
      const fileslist = await getMultipleFiles();
      setMultipleFiles(fileslist);
      console.log(multipleFiles);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {

  // }, []);
  return (
    <Page>
      <div className="row mt-3">
        <div className="col-6">
          <div className="form-group">
            <label>Select Single File</label>
            <input
              type="file"
              className="form-control"
              onChange={e => singleAvatar(e)}
              accept="image/*"
            />
          </div>
          <div className="row">
            <div className="col-10">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => uploadAvatar()}
              >
                Upload
              </button>
            </div>
            <div className="col-10">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => getSingleFileslist()}
              >
                Get
              </button>
            </div>
          </div>
        </div>
        <div className="col-6">
          {singleFiles.map((file, index) => (
            <div className="col-6">
              <div className="card mb-2 border-0 p-0">
                <img
                  src={`${file.filePath}`}
                  height="200"
                  className="card-img-top img-responsive"
                  alt="img"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="col-6">
          <h4 className="text-success font-weight-bold">Multiple Files List</h4>
          {Array.isArray(multipleFiles) ? (
            multipleFiles.map((element, index) => (
              <div key={element._id}>
                <h6 className="text-danger font-weight-bold">{element.title}</h6>
                <div className="row">
                  {element.imgTimelines.map((file, index) => (
                    <div className="col-6">
                      <div className="card mb-2 border-0 p-0">
                        <img
                          src={`${file.filePath}`}
                          height="200"
                          className="card-img-top img-responsive"
                          alt="img"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <h1> Not thing to show </h1>
          )}
        </div>
      </div>
      <div className="col-6">
        <div className="form-group">
          <label>Select Multiple Files</label>
          <input
            type="file"
            onChange={e => MultipleFileChange(e)}
            className="form-control"
            multiple
            accept="image/*"
          />
          <button
            type="button"
            onClick={() => UploadMultipleFiles()}
            className="btn btn-danger"
          >
            UploadMuitiple
          </button>
          <button
            type="button"
            onClick={() => getMultipleFilesList()}
            className="btn btn-danger"
          >
            Get
          </button>
        </div>
      </div>
    </Page>
  );
};

export default Index;
