import useCreateRecords from "../hooks/Records/CreateNewRecord";
import { Label, TextInput, Textarea, Select } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateRecordPage = () => {
  const { createRecord } = useCreateRecords();

  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    parents_name: "",
    parents_address: "",
    parents_contact_number: "",
    pets_name: "",
    pet_species: "",
    pets_breed: "",
    pets_sex: "",
    pets_birthday: "",
    chief_complaint: "",
    medication_given_prior_to_check_up: "",
    last_vaccination_given: "",
    last_vaccination_date: "",
    last_deworming_brand: "",
    last_deworming_date: "",
    is_transferred_from_other_clinic: "",
    weight: "",
    initial_temp: "",
    is_HR: "",
    is_RR: "",
    abnormal_findings: "",
    is_cbc: "",
    prognosis: "",
    tentative_diagnosis: "",
    treatment_given: "",
    take_home_meds: "",
    recommendations: "",
    followup_checkup_date: "",
  });

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const result = await createRecord(formState);

    if (result.success) {
      navigate("/records");
      return;
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="text-start">
        <h1>Create Record</h1>
      </div>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
        onSubmit={onHandleSubmit}
      >
        <div className="col-span-2">
          <h1>Parent Information</h1>
        </div>
        <div className="col-span-2">
          <div className="mb-2 block">
            <Label htmlFor="ParentName" value="Parent Name" />
          </div>
          <TextInput
            value={formState.parents_name}
            onChange={(e) =>
              setFormState({ ...formState, parents_name: e.target.value })
            }
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
          <TextInput
            value={formState.parents_address}
            onChange={(e) =>
              setFormState({
                ...formState,
                parents_address: e.target.value,
              })
            }
            id="parentAddress"
            type="text"
            required
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
            value={formState.last_vaccination_given}
            onChange={(e) =>
              setFormState({
                ...formState,
                last_vaccination_given: e.target.value,
              })
            }
            id="parentContactNumber"
            type="text"
            required
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
            value={formState.pets_name}
            onChange={(e) =>
              setFormState({ ...formState, pets_name: e.target.value })
            }
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
          <TextInput
            value={formState.pets_species}
            onChange={(e) =>
              setFormState({
                ...formState,
                pets_species: e.target.value,
              })
            }
            id="petSpecies"
            type="text"
            required
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="mb-2 block">
            <Label htmlFor="petBreed" value="Pet Breed" />
          </div>
          <TextInput
            value={formState.pets_breed}
            onChange={(e) =>
              setFormState({
                ...formState,
                pets_breed: e.target.value,
              })
            }
            id="petBreed"
            type="text"
            required
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="mb-2 block">
            <Label htmlFor="petSex" value="Pet Sex" />
          </div>
          <Select
            value={formState.pets_sex}
            onChange={(e) =>
              setFormState({
                ...formState,
                pets_sex: e.target.value,
              })
            }
            id="petSex"
            type="text"
            required
            placeholder=""
          >
            <option>M</option>
            <option>F</option>
          </Select>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="mb-2 block">
            <Label htmlFor="petBirthday" value="Pet Birthday" />
          </div>
          <TextInput
            value={formState.pets_birthday}
            onChange={(e) =>
              setFormState({
                ...formState,
                pets_birthday: e.target.value,
              })
            }
            id="petBirthday"
            type="date"
            required
          />
        </div>
        <div className="col-span-2">
          <div className="mb-2 block">
            <Label htmlFor="history" value="History" />
          </div>
          <Textarea
            value={formState.chief_complaint}
            onChange={(e) =>
              setFormState({ ...formState, chief_complaint: e.target.value })
            }
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
            value={formState.medication_given_prior_to_check_up}
            onChange={(e) =>
              setFormState({
                ...formState,
                medication_given_prior_to_check_up: e.target.value,
              })
            }
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
          <TextInput
            value={formState.last_vaccination_given}
            onChange={(e) =>
              setFormState({
                ...formState,
                last_vaccination_given: e.target.value,
              })
            }
            id="lastBrand"
            type="text"
            required
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="mb-2 block">
            <Label htmlFor="lastDate" value="Date" />
          </div>
          <TextInput
            value={formState.last_vaccination_date}
            onChange={(e) =>
              setFormState({
                ...formState,
                last_vaccination_date: e.target.value,
              })
            }
            id="lastDate"
            type="text"
            required
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
            value={formState.last_deworming_brand}
            onChange={(e) =>
              setFormState({
                ...formState,
                last_deworming_brand: e.target.value,
              })
            }
            id="wormingBrand"
            type="text"
            required
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="mb-2 block">
            <Label htmlFor="wormingDate" value="Date" />
          </div>
          <TextInput
            value={formState.last_deworming_date}
            onChange={(e) =>
              setFormState({
                ...formState,
                last_deworming_date: e.target.value,
              })
            }
            id="wormingDate"
            type="date"
            required
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
            id="patientTransferred"
            type="text"
            required
            className="w-full"
            value={
              formState.is_transferred_from_other_clinic ? "True" : "False"
            }
            onChange={(e) =>
              setFormState({
                ...formState,
                is_transferred_from_other_clinic: e.target.value === "True",
              })
            }
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
          <TextInput
            value={formState.weight}
            onChange={(e) =>
              setFormState({
                ...formState,
                weight: e.target.value,
              })
            }
            id="weight"
            type="number"
            required
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="mb-2 block">
            <Label htmlFor="initialTemp" value="Initial Temperature" />
          </div>
          <TextInput
            value={formState.initial_temp}
            onChange={(e) =>
              setFormState({
                ...formState,
                initial_temp: e.target.value,
              })
            }
            id="initialTemp"
            type="number"
            required
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="mb-2 block">
            <Label htmlFor="hr" value="HR" />
          </div>
          <Select
            value={formState.is_HR ? "True" : "False"}
            onChange={(e) =>
              setFormState({
                ...formState,
                is_HR: e.target.value === "True",
              })
            }
            id="hr"
            type="text"
            required
          >
            <option>True</option>
            <option>False</option>
          </Select>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="mb-2 block">
            <Label htmlFor="rr" value="RR" />
          </div>
          <Select
            value={formState.is_RR ? "True" : "False"}
            onChange={(e) =>
              setFormState({
                ...formState,
                is_RR: e.target.value === "True",
              })
            }
            id="rr"
            type="text"
            required
          >
            <option>True</option>
            <option>False</option>
          </Select>
        </div>
        <div className="col-span-2">
          <div className="mb-2 block">
            <Label htmlFor="abnormalFindings" value="Abnormal Findings" />
          </div>
          <Textarea
            value={formState.abnormal_findings}
            onChange={(e) =>
              setFormState({
                ...formState,
                abnormal_findings: e.target.value,
              })
            }
            id="abnormalFindings"
            type="text"
            required
            className="w-full"
            rows={4}
          />
        </div>
        {/* <div className="col-span-2 md:col-span-1 ">
          <div className="mb-2 block">
            <Label htmlFor="rr" value="CBC" />
          </div>
          <TextInput
            value={formState.is_cbc}
            onChange={(e) =>
              setFormState({
                ...formState,
                is_cbc: e.target.value,
              })
            }
            id="rr"
            type="text"
            required
          />
        </div> */}
        <div className="col-span-2">
          <div className="mb-2 block">
            <Label htmlFor="prognosis" value="Prognosis" />
          </div>
          <TextInput
            value={formState.prognosis}
            onChange={(e) =>
              setFormState({
                ...formState,
                prognosis: e.target.value,
              })
            }
            id="prognosis"
            type="text"
            required
            className="w-full"
          />
        </div>
        <div className="col-span-2">
          <div className="mb-2 block">
            <Label htmlFor="tentativeDiagnosis" value="Tentative Diagnosis" />
          </div>
          <TextInput
            value={formState.tentative_diagnosis}
            onChange={(e) =>
              setFormState({
                ...formState,
                tentative_diagnosis: e.target.value,
              })
            }
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
            value={formState.treatment_given}
            onChange={(e) =>
              setFormState({
                ...formState,
                treatment_given: e.target.value,
              })
            }
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
            value={formState.take_home_meds}
            onChange={(e) =>
              setFormState({
                ...formState,
                take_home_meds: e.target.value,
              })
            }
            id="takeHomeMeds"
            type="text"
            required
            className="w-full"
          />
        </div>
        {/* <div className="col-span-2">
          <div className="mb-2 block">
            <Label htmlFor="prognosis" value="Prognosis" />
          </div>
          <TextInput
            value={formState.recommendations}
            onChange={(e) =>
              setFormState({
                ...formState,
                recommendations: e.target.value,
              })
            }
            id="prognosis"
            type="text"
            required
            className="w-full"
          />
        </div> */}
        <div className="col-span-2">
          <div className="mb-2 block">
            <Label htmlFor="recommendations" value="Recommendations" />
          </div>
          <Textarea
            value={formState.recommendations}
            onChange={(e) =>
              setFormState({
                ...formState,
                recommendations: e.target.value,
              })
            }
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
            value={formState.followup_checkup_date}
            onChange={(e) =>
              setFormState({
                ...formState,
                followup_checkup_date: e.target.value,
              })
            }
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
  );
};

export default CreateRecordPage;
