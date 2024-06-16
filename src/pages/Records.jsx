// RecordsPage.js
import { useEffect } from "react";
import { Table, Pagination } from "flowbite-react";
import useGetRecordFetch from "../hooks/Records/GetRecords";
import { useNavigate } from "react-router-dom";

const RecordsPage = () => {
  const { getAnimalRecordsFromAPI, records, loading } = useGetRecordFetch();

  useEffect(() => {
    getAnimalRecordsFromAPI();
  }, []); // Fetch data on component mount

  const navigate = useNavigate();

  const handleEditClick = (items) => {
    console.log(items.id);
    navigate(`/edit-record/${items.id}`);
  };

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
            {loading ? (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  Loading...
                </td>
              </tr>
            ) : (
              records.map((record) => (
                <Table.Row
                  key={record.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {record.pets_name}
                  </Table.Cell>
                  <Table.Cell>{record.pets_breed}</Table.Cell>
                  <Table.Cell>{record.chief_complaint}</Table.Cell>
                  <Table.Cell>{record.followup_checkup_date}</Table.Cell>
                  <Table.Cell>{record.parents_name}</Table.Cell>
                  <Table.Cell>{record.date_hospitalized}</Table.Cell>
                  <Table.Cell>
                    <button
                      onClick={() => handleEditClick(record)}
                      type="button"
                      className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                        />
                      </svg>
                      <span className="sr-only">Edit Icon</span>
                    </button>
                  </Table.Cell>
                </Table.Row>
              ))
            )}
          </Table.Body>
        </Table>
        {/* <div className="flex overflow-x-auto sm:justify-center">
      <Pagination layout="table" currentPage={currentPage} totalPages={100} onPageChange={onPageChange} showIcons />
    </div> */}
      </div>
    </>
  );
};

export default RecordsPage;
