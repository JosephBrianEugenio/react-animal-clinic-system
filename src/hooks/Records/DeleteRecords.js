import { useState } from "react";
import { HTTP_API } from "../../boot/https";
import { toast } from "react-toastify";

const useDeleteRecord = () => {
  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const deleteAnimalRecordByIdFromAPI = async (id) => {
    setLoading(true);
    try {
      const response = await HTTP_API().delete(`delete_medical_history/${id}/`);
      setDeleted(true);
      toast.success("Record deleted successfully!");
      return response;
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete record.");
    } finally {
      setLoading(false);
    }
  };

  return {
    deleteAnimalRecordByIdFromAPI,
    loading,
    deleted
  };
};

export default useDeleteRecord;
