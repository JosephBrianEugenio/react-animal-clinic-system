import "./App.css";
import Layout from "./Layouts/NavigationBar";
import Authentication from "./pages/Authentication";
import RecordsPage from "./pages/Records";
import CreateRecordPage from "./pages/CreateRecord";
import EditRecordpage from "./pages/EditRecord";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import useLoginFetch from "./hooks/Authentication/Login";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { success, isAuthenticated } = useLoginFetch();
  console.log("aut", isAuthenticated());
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/" element={<Layout />}>
          <Route index path="records" element={<RecordsPage />} />
          <Route path="create-record" element={<CreateRecordPage />} />
          <Route path="edit-record/:id" element={<EditRecordpage />} />
        </Route>
      </Routes>
    </>
    // <>
    //   <ToastContainer />

    //   <Routes>
    //     {/* Route for Authentication */}
    //     <Route
    //       path="/"
    //       element={!isAuthenticated() ? <Authentication /> : null}
    //     />
    //     {/* Protected Routes */}
    //     {isAuthenticated() && (
    //       <Route path="/" element={<Layout />}>
    //         <Route index path="records" element={<RecordsPage />} />
    //         <Route path="create-record" element={<CreateRecordPage />} />
    //         <Route path="edit-record/:id" element={<EditRecordpage />} />
    //       </Route>
    //     )}
    //     {/* Redirect Unauthorized Users */}
    //     {!isAuthenticated() && <Route path="*" element={<Navigate to="/" />} />}
    //   </Routes>
    // </>
  );
}

export default App;
