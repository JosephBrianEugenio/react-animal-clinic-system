import { Button, Label, TextInput, Textarea } from "flowbite-react";

const CreateRecordPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="text-start">Create Record</div>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
        {/* <div className="col-span-2 md:col-span-1">
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required />
        </div> */}
        <div className="col-span-2">
          <div className="mb-2 block">
            <Label htmlFor="ParentName" value="Parent Name" />
          </div>
          <TextInput id="ParentName" type="text" required className="w-full" />
        </div>
        <div className="col-span-2">
          <div className="mb-2 block">
            <Label htmlFor="PatientInformation" value="Patient Information" />
          </div>
          <TextInput
            id="PatientInformation"
            type="text"
            required
            className="w-full"
          />
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
          <TextInput id="wormingDate" type="text" required />
        </div>
        <div className="col-span-2">
          <div className="mb-2 block">
            <Label
              htmlFor="patientTransferred"
              value="Was the patient transferred from or referred by another clinic?"
            />
          </div>
          <TextInput
            id="patientTransferred"
            type="text"
            required
            className="w-full"
          />
        </div>
        <div className="col-span-2">
          <h3>Physical Examination</h3>
        </div>

        <div className="col-span-2 md:col-span-1">
          <div className="mb-2 block">
            <Label htmlFor="weight" value="Weight" />
          </div>
          <TextInput id="weight" type="text" required />
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="mb-2 block">
            <Label htmlFor="initialTemp" value="Initial Temperature" />
          </div>
          <TextInput id="initialTemp" type="text" required />
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="mb-2 block">
            <Label htmlFor="hr" value="HR" />
          </div>
          <TextInput id="hr" type="text" required />
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="mb-2 block">
            <Label htmlFor="rr" value="RR" />
          </div>
          <TextInput id="rr" type="text" required />
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
        <div className="col-span-2 md:col-span-1 ">
          <div className="mb-2 block">
            <Label htmlFor="rr" value="RR" />
          </div>
          <TextInput id="rr" type="text" required />
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
            <Label htmlFor="prognosis" value="Prognosis" />
          </div>
          <TextInput id="prognosis" type="text" required className="w-full" />
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
            id="followUpCheckup"
            type="text"
            required
            className="w-full"
          />
        </div>
        <div className="text-black">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRecordPage;
