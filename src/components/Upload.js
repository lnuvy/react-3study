import React, { useRef } from "react";
import { Button } from "../elements";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as imageActions } from "../redux/modules/image";

const Upload = () => {
  const dispatch = useDispatch();
  const isUploading = useSelector((state) => state.image.uploading);
  const fileInput = useRef();

  const selectFile = (e) => {
    const reader = new FileReader();
    const file = fileInput.current.files[0];

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      console.log(reader.result);
      dispatch(imageActions.setPreview(reader.result));
    };
  };

  const uploadFB = () => {
    let image = fileInput.current.files[0];
    dispatch(imageActions.uploadImageFB(image));
  };

  return (
    <>
      <input
        type="file"
        onChange={selectFile}
        ref={fileInput}
        disabled={isUploading}
      />
    </>
  );
};
export default Upload;
