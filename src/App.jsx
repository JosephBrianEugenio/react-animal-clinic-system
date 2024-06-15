import { useState } from "react";
import "./App.css";
import NavigationBar from "./Layouts/NavigationBar";
import Authentication from "./pages/Authentication";
import RecordsPage from "./pages/Records";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/app" element={<NavigationBar />}>
          <Route path="records" element={<RecordsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
