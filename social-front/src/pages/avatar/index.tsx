import React, { useEffect, useState } from "react";
import Page from "components/layout/Page";
import { singleFileUpload, getSingleFiles } from "../../common/fileUpload";

const Index = props => {
  const [avatar, setAvatar] = useState("");
  const [singleFiles, setSingleFiles] = useState([]);

  const singleAvatar = e => {
    setAvatar(e.target.files[0]);
  };

  const uploadAvatar = async () => {
    console.log("singleFile", avatar);
    let formData = new FormData();
    formData.append("type", "avatar");
    formData.append("file_id", "user-1");
    formData.append("file", avatar);
    console.log("formData", formData);
    await singleFileUpload(formData);
  };

  const getSingleFileslist = async () => {
    try {
      const fileslist = await getSingleFiles();
      setSingleFiles(fileslist);
    } catch (error) {
      console.log(error.response);
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
            <input type="file" className="form-control" onChange={e => singleAvatar(e)} />
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
                  src={`http://localhost:5000/api/v1/${file.filePath}`}
                  height="200"
                  className="card-img-top img-responsive"
                  alt="img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
};

export default Index;
