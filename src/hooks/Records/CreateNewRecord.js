import { useState } from "react";
import { HTTP_API } from "../../boot/https";
import { toast } from "react-toastify";

const useCreateRecords = () => {
  const [success, setSuccess] = useState(false);

  const formatErrorMessages = (errors) => {
    const messages = [];
    for (const property in errors) {
      if (errors.hasOwnProperty(property) && errors[property].length > 0) {
        errors[property].forEach((message) => {
          messages.push(`${property}: ${message}`);
        });
      }
    }
    return messages.join(', ');
  };

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
      let errorMessage = formatErrorMessages(e.response.data.errors);
      toast.error(errorMessage);
      return { success: false, message: errorMessage };
    }
  };
  return {
    createRecord,
  };
};

export default useCreateRecords;
