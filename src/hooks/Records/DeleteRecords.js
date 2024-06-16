import { useState } from "react";
import { HTTP_API } from "../../boot/https";

const useDeleteRecord = () => {
  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const deleteAnimalRecordByIdFromAPI = async (id) => {
    try {
      const response = await HTTP_API().delete(`delete_medical_history/${id}/`);
      setDeleted(true);
      return response;
    } catch (err) {
      console.error(err);
    }
  };

  return {
    deleteAnimalRecordByIdFromAPI
  };
};

export default useDeleteRecord;
