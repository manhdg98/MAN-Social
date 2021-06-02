import React from "react";
import { toast } from "react-toastify";

const property: any = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined
};

export const toastifySuccess = mess => {
  return toast.success(mess, property);
};

export const toastifyError = mess => {
  return toast.error(mess, property);
};

export const toastifyWarn = mess => {
  return toast.warn(mess, property);
};

export const toastifyInfo = mess => {
  return toast.info(mess, property);
};
