import { useEffect, useState } from "react";
import { Button, Label, TextInput, Textarea, Select } from "flowbite-react";
import useGetRecordFetch from "../hooks/Records/GetRecords";
import useDeleteRecord from "../hooks/Records/DeleteRecords";
import { useParams } from "react-router-dom";

const EditRecordpage = () => {
  const { getAnimalRecordByIdFromAPI, recordsById, loading } =
    useGetRecordFetch();

    const { deleteAnimalRecordByIdFromAPI } = useDeleteRecord()

  const { id } = useParams();

  const [record, setRecord] = useState(null);

  useEffect(() => {
    if (id) {
      getAnimalRecordByIdFromAPI(id);
    }
  }, [id, getAnimalRecordByIdFromAPI]);

  //   useEffect(() => {
  //     if (recordsById) {
  //       setRecord(recordsById);
  //     }
  //   }, [recordsById]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecord((prevRecord) => ({
      ...prevRecord,
      [name]: value,
    }));
  };

  const handleDeleteRecord = async () => {
    if (!id) return; // Ensure id is valid before attempting to delete

    try {
      await deleteAnimalRecordByIdFromAPI(id);
      // Optionally show success message or handle further actions (e.g., redirect)
    //   history.push("/records"); 
    } catch (error) {
      // Handle error (e.g., show error message)
      console.error("Delete Error:", error);
    }
  };

  return (
    <>
      <div className="flex justify-between px-20 pb-10">
        <button type="button">
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
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
            class="w-6 h-6 text-gray-800 dark:text-white"
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
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div className="col-span-2">
            <h1>Parent Information</h1>
          </div>
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="ParentName" value="Parent Name" />
            </div>
            <TextInput
              id="ParentName"
              type="text"
              required
              className="w-full"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="mb-2 block">
              <Label htmlFor="parentAddress" value="Parent's Address" />
            </div>
            <TextInput id="parentAddress" type="text" required />
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="mb-2 block">
              <Label
                htmlFor="parentContactNumber"
                value="Parent's Contact Number"
              />
            </div>
            <TextInput id="parentContactNumber" type="text" required />
          </div>
          <div className="col-span-2">
            <h1>Patient Information</h1>
          </div>
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="PatientInformation" value="Pet Name" />
            </div>
            <TextInput
              id="PatientInformation"
              type="text"
              required
              className="w-full"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="mb-2 block">
              <Label htmlFor="petSpecies" value="Pet Species" />
            </div>
            <TextInput id="petSpecies" type="text" required />
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="mb-2 block">
              <Label htmlFor="petBreed" value="Pet Breed" />
            </div>
            <TextInput id="petBreed" type="text" required />
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="mb-2 block">
              <Label htmlFor="petSex" value="Pet Sex" />
            </div>
            <Select id="petSex" type="text" required placeholder="">
              <option>Mx</option>
              <option>Fx</option>
            </Select>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="mb-2 block">
              <Label htmlFor="petBirthday" value="Pet Birthday" />
            </div>
            <TextInput id="petBirthday" type="date" required />
          </div>
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="history" value="History" />
            </div>
            <Textarea
              id="history"
              type="text"
              required
              className="w-full"
              rows={4}
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
              id="medicationCheckup"
              type="text"
              required
              className="w-full"
            />
          </div>
          <div className="col-span-2">
            <h3>Last vaccination given</h3>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="mb-2 block">
              <Label htmlFor="lastBrand" value="Brand" />
            </div>
            <TextInput id="lastBrand" type="text" required />
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="mb-2 block">
              <Label htmlFor="lastDate" value="Date" />
            </div>
            <TextInput id="lastDate" type="text" required />
          </div>
          <div className="col-span-2">
            <h3>Last de-worming given</h3>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="mb-2 block">
              <Label htmlFor="wormingBrand" value="Brand" />
            </div>
            <TextInput id="wormingBrand" type="text" required />
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="mb-2 block">
              <Label htmlFor="wormingDate" value="Date" />
            </div>
            <TextInput id="wormingDate" type="date" required />
          </div>
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label
                htmlFor="patientTransferred"
                value="Was the patient transferred from or referred by another clinic?"
              />
            </div>
            <Select
              id="patientTransferred"
              type="text"
              required
              className="w-full"
            >
              <option>True</option>
              <option>False</option>
            </Select>
          </div>
          <div className="col-span-2">
            <h3>Physical Examination</h3>
          </div>

          <div className="col-span-2 md:col-span-1">
            <div className="mb-2 block">
              <Label htmlFor="weight" value="Weight" />
            </div>
            <TextInput id="weight" type="number" required />
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="mb-2 block">
              <Label htmlFor="initialTemp" value="Initial Temperature" />
            </div>
            <TextInput id="initialTemp" type="number" required />
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="mb-2 block">
              <Label htmlFor="hr" value="HR" />
            </div>
            <Select id="hr" type="text" required>
              <option>True</option>
              <option>False</option>
            </Select>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="mb-2 block">
              <Label htmlFor="rr" value="RR" />
            </div>
            <Select id="rr" type="text" required>
              <option>True</option>
              <option>False</option>
            </Select>
          </div>
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="abnormalFindings" value="Abnormal Findings" />
            </div>
            <Textarea
              id="abnormalFindings"
              type="text"
              required
              className="w-full"
              rows={4}
            />
          </div>
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="prognosis" value="Prognosis" />
            </div>
            <TextInput id="prognosis" type="text" required className="w-full" />
          </div>
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="tentativeDiagnosis" value="Tentative Diagnosis" />
            </div>
            <TextInput
              id="tentativeDiagnosis"
              type="text"
              required
              className="w-full"
            />
          </div>
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="treatmentGiven" value="Treatment Given" />
            </div>
            <TextInput
              id="treatmentGiven"
              type="text"
              required
              className="w-full"
            />
          </div>
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="takeHomeMeds" value="Take Home Meds" />
            </div>
            <TextInput
              id="takeHomeMeds"
              type="text"
              required
              className="w-full"
            />
          </div>
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="recommendations" value="Recommendations" />
            </div>
            <Textarea
              id="recommendations"
              type="text"
              required
              className="w-full"
              rows={4}
            />
          </div>
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="followUpCheckup" value="Follow up check up" />
            </div>
            <TextInput
              pattern="\d{4}-\d{2}-\d{2}"
              id="followUpCheckup"
              type="date"
              required
              className="w-full"
            />
          </div>
          <div className="text-black">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditRecordpage;
