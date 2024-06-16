import { useState } from "react";
import "./App.css";
import Layout from "./Layouts/NavigationBar";
import Authentication from "./pages/Authentication";
import RecordsPage from "./pages/Records";
import CreateRecordPage from "./pages/CreateRecord";
import EditRecordpage from "./pages/EditRecord";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
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
  );
}

export default App;
