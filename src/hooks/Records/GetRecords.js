// useGetRecordFetch.js
import { useState } from "react";
import { HTTP_API } from "../../boot/https";
import { toast } from "react-toastify";

const useGetRecordFetch = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAnimalRecordsFromAPI = async () => {
    setLoading(true);
    try {
      const response = await HTTP_API().get("display_medical_history/");
      console.log("Data:", response);

      if (response.statusText === "OK") {
        setRecords(response.data.data); 
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return {
    getAnimalRecordsFromAPI,
    records,
    loading,
  };
};

export default useGetRecordFetch;
