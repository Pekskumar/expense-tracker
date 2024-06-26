import { toast } from "react-toastify";

export const apiResponse = (isMsgDisplay, data, setLoading) => {
  debugger;
  if (data?.status_code === 0) {
    if (isMsgDisplay) {
      setLoading(false);
      toast.error(data?.message);
    }
    if (setLoading) {
      setLoading(false);
    }
  } else if (data?.status_code === 1) {
    if (setLoading) {
      setLoading(false);
    }
    if (isMsgDisplay) {
      toast.success(data?.message);
    }
    return {
      isValidate: true,
      data: data,
    };
  } else if (data?.status_code === 2) {
    localStorage.clear();
    window.location.pathname = "/";
  } else if (data?.name === "AxiosError") {
    if (setLoading) {
      setLoading(false);
    }
    if (data?.response?.status === 422) {
      return {
        status: 0,
        message: toast.error("Unprocessable Entity"),
      };
    } else if (data?.response?.status === 401) {
      debugger
      localStorage.clear();
      window.location.pathname = "/";
    } else if (data?.response?.status === 405) {
      return {
        status: 0,
        message: toast.error("Method Not Allowed"),
      };
    } else if (data?.response?.status === 500) {
      return {
        status: 0,
        message: toast.error("Internal Server Error"),
      };
    } else {
      return {
        status: 0,
        message: toast.error(
          "Something wrong happened, please try again later"
        ),
      };
    }
  }
};
