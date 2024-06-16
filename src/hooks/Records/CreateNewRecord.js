import { useState } from "react";
import { HTTP_API } from "../../boot/https";
import { toast } from "react-toastify";

const useCreateRecords = () => {
  const [success, setSuccess] = useState(false);

  const createRecord = async (payload) => {
    console.log("payload", payload);
    try {
      const response = await HTTP_API().post(
        "create_medical_history/",
        payload
      );
      if (response.statusText === "OK") {
        console.log("success");
        setSuccess(true);
        toast.success(response.data.message);
        return { success: true };
      }
    } catch (e) {
      console.error(e.response.data);
      let errorMessage = e.response.data.errors.pets_sex[0];
      toast.error(errorMessage);
      return { success: false, message: errorMessage };
    }
  };
  return {
    createRecord,
  };
};

export default useCreateRecords;
