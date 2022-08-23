import React, { useMemo } from "react";
import { ToastContainer, toast } from "react-toastify";

const Toast = () => {

    return (
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
  );
};

export default Toast
