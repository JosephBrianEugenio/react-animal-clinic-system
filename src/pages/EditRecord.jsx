import { useEffect, useState } from "react";
import { Label, TextInput, Textarea, Select } from "flowbite-react";
import useGetRecordFetch from "../hooks/Records/GetRecords";
import useDeleteRecord from "../hooks/Records/DeleteRecords";
import useEditRecord from "../hooks/Records/EditRecord";
import { useParams, useNavigate } from "react-router-dom";

const EditRecordPage = () => {
  const {
    getAnimalRecordByIdFromAPI,
    recordsById,
    loading: recordLoading,
  } = useGetRecordFetch();
  const { deleteAnimalRecordByIdFromAPI } = useDeleteRecord();
  const {
    editRecordFromAPI,
    loading: editLoading,
    error: editError,
  } = useEditRecord();
  const { id } = useParams();
  const navigate = useNavigate();

  const [record, setRecord] = useState(null);

  useEffect(() => {
    if (id) {
      getAnimalRecordByIdFromAPI(id);
    }
  }, [id, getAnimalRecordByIdFromAPI]);

  useEffect(() => {
    if (recordsById) {
      setRecord(recordsById);
    }
  }, [recordsById]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecord((prevRecord) => ({
      ...prevRecord,
      [name]: value,
    }));
  };

  const handleDeleteRecord = async () => {
    if (!id) return;
    try {
      await deleteAnimalRecordByIdFromAPI(id);
      navigate("/records");
    } catch (error) {
      console.error("Delete Error:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!id || !record) return;

    try {
      await editRecordFromAPI(id, record);
      history.push("/records");
    } catch (error) {
      console.error("Edit Error:", error);
    }
  };

  if (recordLoading || editLoading) {
    return <p>Loading...</p>;
  }

  if (!record) {
    return <p>No record found.</p>;
  }

  return (
    <>
      <div className="flex justify-between px-10 pb-10">
        <button type="button" onClick={() => history.push("/records")}>
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h14M5 12l4-4m-4 4 4 4"
            />
          </svg>
        </button>
        <h3>Edit Record</h3>
        <button onClick={handleDeleteRecord} type="button">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
            />
          </svg>
        </button>
      </div>
      <div className="max-w-screen-xl mx-auto px-4">
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
          onSubmit={handleSubmit}
        >
          {/* Form fields with handleInputChange as onChange handler and value from record state */}
          <div className="col-span-2">
            <h1>Parent Information</h1>
          </div>
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="ParentName" value="Parent Name" />
            </div>
            <TextInput
              name="parents_name"
              value={record.parents_name || ""}
              id="ParentName"
              type="text"
              required
              className="w-full"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="mb-2 block">
              <Label htmlFor="parentAddress" value="Parent's Address" />
            </div>
            <TextInput
              name="parents_address"
              value={record.parents_address || ""}
              id="parentAddress"
              type="text"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="mb-2 block">
              <Label
                htmlFor="parentContactNumber"
                value="Parent's Contact Number"
              />
            </div>
            <TextInput
              name="parents_contact_number"
              value={record.parents_contact_number || ""}
              id="parentContactNumber"
              type="text"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2">
            <h1>Patient Information</h1>
          </div>
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="PatientInformation" value="Pet Name" />
            </div>
            <TextInput
              name="pets_name"
              value={record.pets_name || ""}
              id="PatientInformation"
              type="text"
              required
              className="w-full"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="mb-2 block">
              <Label htmlFor="petSpecies" value="Pet Species" />
            </div>
            <TextInput
              name="pets_species"
              value={record.pets_species || ""}
              id="petSpecies"
              type="text"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="mb-2 block">
              <Label htmlFor="petBreed" value="Pet Breed" />
            </div>
            <TextInput
              name="pets_breed"
              value={record.pets_breed || ""}
              id="petBreed"
              type="text"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="mb-2 block">
              <Label htmlFor="petSex" value="Pet Sex" />
            </div>
            <Select
              name="pets_sex"
              value={record.pets_sex || ""}
              id="petSex"
              type="text"
              required
              onChange={handleInputChange}
            >
              <option value="Mx">Mx</option>
              <option value="Fx">Fx</option>
            </Select>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="mb-2 block">
              <Label htmlFor="petBirthday" value="Pet Birthday" />
            </div>
            <TextInput
              name="pets_birthday"
              value={record.pets_birthday || ""}
              id="petBirthday"
              type="date"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="history" value="History" />
            </div>
            <Textarea
              name="chief_complaint"
              value={record.chief_complaint || ""}
              id="history"
              type="text"
              required
              className="w-full"
              rows={4}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label
                htmlFor="medicationCheckup"
                value="Medication given prior to checkup:"
              />
            </div>
            <TextInput
              name="medication_given_prior_to_check_up"
              value={record.medication_given_prior_to_check_up || ""}
              id="medicationCheckup"
              type="text"
              required
              className="w-full"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2">
            <h3>Last vaccination given</h3>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="mb-2 block">
              <Label htmlFor="lastBrand" value="Brand" />
            </div>
            <TextInput
              name="last_vaccination_given"
              value={record.last_vaccination_given || ""}
              id="lastBrand"
              type="text"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="mb-2 block">
              <Label htmlFor="lastDate" value="Date" />
            </div>
            <TextInput
              name="last_vaccination_date"
              value={record.last_vaccination_date || ""}
              id="lastDate"
              type="date"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2">
            <h3>Last de-worming given</h3>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="mb-2 block">
              <Label htmlFor="wormingBrand" value="Brand" />
            </div>
            <TextInput
              name="last_deworming_brand"
              value={record.last_deworming_brand || ""}
              id="wormingBrand"
              type="text"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="mb-2 block">
              <Label htmlFor="wormingDate" value="Date" />
            </div>
            <TextInput
              name="last_deworming_date"
              value={record.last_deworming_date || ""}
              id="wormingDate"
              type="date"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label
                htmlFor="patientTransferred"
                value="Was the patient transferred from or referred by another clinic?"
              />
            </div>
            <Select
              name="is_transferred_from_other_clinic"
              value={record.is_transferred_from_other_clinic ? "True" : "False"}
              id="patientTransferred"
              type="text"
              required
              className="w-full"
              onChange={handleInputChange}
            >
              <option value="True">True</option>
              <option value="False">False</option>
            </Select>
          </div>
          <div className="col-span-2">
            <h3>Physical Examination</h3>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="mb-2 block">
              <Label htmlFor="weight" value="Weight" />
            </div>
            <TextInput
              name="weight"
              value={record.weight || ""}
              id="weight"
              type="number"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="mb-2 block">
              <Label htmlFor="initialTemp" value="Initial Temperature" />
            </div>
            <TextInput
              name="initial_temp"
              value={record.initial_temp || ""}
              id="initialTemp"
              type="number"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="mb-2 block">
              <Label htmlFor="hr" value="HR" />
            </div>
            <Select
              name="is_HR"
              value={record.is_HR ? "True" : "False"}
              id="hr"
              type="text"
              required
              onChange={handleInputChange}
            >
              <option value="True">True</option>
              <option value="False">False</option>
            </Select>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="mb-2 block">
              <Label htmlFor="rr" value="RR" />
            </div>
            <Select
              name="is_RR"
              value={record.is_RR ? "True" : "False"}
              id="rr"
              type="text"
              required
              onChange={handleInputChange}
            >
              <option value="True">True</option>
              <option value="False">False</option>
            </Select>
          </div>
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="abnormalFindings" value="Abnormal Findings" />
            </div>
            <Textarea
              name="abnormal_findings"
              value={record.abnormal_findings || ""}
              id="abnormalFindings"
              type="text"
              required
              className="w-full"
              rows={4}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="prognosis" value="Prognosis" />
            </div>
            <TextInput
              name="prognosis"
              value={record.prognosis || ""}
              id="prognosis"
              type="text"
              required
              className="w-full"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="tentativeDiagnosis" value="Tentative Diagnosis" />
            </div>
            <TextInput
              name="tentative_diagnosis"
              value={record.tentative_diagnosis || ""}
              id="tentativeDiagnosis"
              type="text"
              required
              className="w-full"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="treatmentGiven" value="Treatment Given" />
            </div>
            <TextInput
              name="treatment_given"
              value={record.treatment_given || ""}
              id="treatmentGiven"
              type="text"
              required
              className="w-full"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="takeHomeMeds" value="Take Home Meds" />
            </div>
            <TextInput
              name="take_home_meds"
              value={record.take_home_meds || ""}
              id="takeHomeMeds"
              type="text"
              required
              className="w-full"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="recommendations" value="Recommendations" />
            </div>
            <Textarea
              name="recommendations"
              value={record.recommendations || ""}
              id="recommendations"
              type="text"
              required
              className="w-full"
              rows={4}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="followUpCheckup" value="Follow up check up" />
            </div>
            <TextInput
              name="followup_checkup_date"
              value={record.followup_checkup_date || ""}
              pattern="\d{4}-\d{2}-\d{2}"
              id="followUpCheckup"
              type="date"
              required
              className="w-full"
              onChange={handleInputChange}
            />
          </div>
          <div className="text-black">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditRecordPage;
