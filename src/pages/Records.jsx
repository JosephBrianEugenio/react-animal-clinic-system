import { useState } from "react";
import { Table } from "flowbite-react";
import CreateRecordDialog from "../components/Dialogs/CreateRecordDialog";

// Static array of data for the table
const data = [
  {
    petName: "Bella",
    breed: "Golden Retriever",
    chiefComplaint: "Limping",
    followUpCheckupDate: "2024-07-01",
    parentName: "John Doe",
    createdAt: "2024-06-01",
  },
  {
    petName: "Max",
    breed: "Bulldog",
    chiefComplaint: "Coughing",
    followUpCheckupDate: "2024-07-05",
    parentName: "Jane Smith",
    createdAt: "2024-06-05",
  },
  {
    petName: "Luna",
    breed: "Siamese Cat",
    chiefComplaint: "Loss of appetite",
    followUpCheckupDate: "2024-07-10",
    parentName: "Emily Johnson",
    createdAt: "2024-06-10",
  },
];

const RecordsPage = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Pet's Name</Table.HeadCell>
            <Table.HeadCell>Breed</Table.HeadCell>
            <Table.HeadCell>Chief Complaint</Table.HeadCell>
            <Table.HeadCell>Follow up Checkup Date</Table.HeadCell>
            <Table.HeadCell>Parent Name</Table.HeadCell>
            <Table.HeadCell>Created At</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Actions</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {data.map((record, index) => (
              <Table.Row
                key={index}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {record.petName}
                </Table.Cell>
                <Table.Cell>{record.breed}</Table.Cell>
                <Table.Cell>{record.chiefComplaint}</Table.Cell>
                <Table.Cell>{record.followUpCheckupDate}</Table.Cell>
                <Table.Cell>{record.parentName}</Table.Cell>
                <Table.Cell>{record.createdAt}</Table.Cell>
                <Table.Cell>
                  <button
                    type="button"
                    class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
                  >
                    <svg
                      className="w-4 h-4 text-white-800 dark:text-white"
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
                        d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                      />
                    </svg>
                    <span className="sr-only">Icon description</span>
                  </button>
                  <button
                    type="button"
                    className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
                  >
                    <svg
                      className="w-4 h-4 text-red-800 dark:text-white"
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

                    <span className="sr-only">Icon description</span>
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
};

export default RecordsPage;
