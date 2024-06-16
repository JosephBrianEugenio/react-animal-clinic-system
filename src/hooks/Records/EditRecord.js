import { useState } from "react";
import { HTTP_API } from "../../boot/https";
import { toast } from "react-toastify";

const useEditRecord = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const editRecordFromAPI = async (id, updatedData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await HTTP_API().put(`edit_medical_record/${id}/`, updatedData);
      toast.success("Record updated successfully!");
      console.log("response edit", response);
    } catch (err) {
      console.error(err);
      setError(err.message || "Error updating record.");
      toast.error("Failed to update record.");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    editRecordFromAPI,
  };
};

export default useEditRecord;
