import { useState, useCallback } from "react";
import { HTTP_API } from "../../boot/https";

const useGetRecordFetch = () => {
  const [records, setRecords] = useState([]);
  const [recordsById, setRecordsById] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const getAnimalRecordsFromAPI = async () => {
    setLoading(true);
    try {
      const response = await HTTP_API().get("display_medical_history/");
      if (response.status === 200) {
        setRecords(response.data.data);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const getAnimalRecordByIdFromAPI = useCallback(async (id) => {
    console.log("iddddd", id);
    setLoading(true);
    try {
      const response = await HTTP_API().get(`display_medical_history/${id}/`);
      console.log("response", response);
      setRecordsById(response.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    getAnimalRecordsFromAPI,
    getAnimalRecordByIdFromAPI,
    recordsById,
    records,
    loading,
  };
};

export default useGetRecordFetch;
