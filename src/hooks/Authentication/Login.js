import { useState } from "react";
import { HTTP_WEB } from "../../boot/https";
import { toast } from "react-toastify";

const useLoginFetch = () => {
  const [success, setSuccess] = useState(false);

  const login = async (userName, password) => {
    try {
      const response = await HTTP_WEB().post("login/", {
        username: userName,
        password: password,
      });
      if (response.statusText === "OK") {
        localStorage.setItem("access_token", response.data.data.access_token);
        setSuccess(true);
        toast.success(response.data.message);
        return { success: true };
      }
    } catch (error) {
      console.error(error.response.data.detail);
      let errorMessage = error.response.data.detail;
      toast.error(errorMessage);
      return { success: false, message: errorMessage };
    }
  };
  return { login, success };
};
export default useLoginFetch;
