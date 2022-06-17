import React from "react";
import Navbar from "./Components/Navbar";

import { Routes, Route,Navigate } from "react-router-dom";
import ContactList from "./Components/ContactList";
import AddContact from "./Components/AddContact"
import ViewContact from "./Components/ViewContact";
import EditContact from "./Components/EditContact";


function App() {
  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <Routes>
          <Route path={'/'} element={<Navigate to={'contact/list'} />} />
          <Route path={'/contact/list'} element={<ContactList/>} />
          <Route path={'/contact/add'} element={<AddContact />} />
          <Route path={'/contact/view/:contactId'} element={<ViewContact />} />
          <Route path={'/contact/edit/:contactId'} element={<EditContact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
