import { useState } from "react";
import "./App.css";
import Layout from "./Layouts/NavigationBar";
import Authentication from "./pages/Authentication";
import RecordsPage from "./pages/Records";
import CreateRecordPage from "./pages/CreateRecord";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/" element={<Layout />}>
          <Route index path="records" element={<RecordsPage />} />
          <Route path="create-record" element={<CreateRecordPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
