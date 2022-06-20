import React from "react";
import Navbar from "./Components/Navbar";

import { Routes, Route,Navigate } from "react-router-dom";
import ContactList from "./Components/ContactList";
import AddContact from "./Components/AddContact"
import ViewAllContact from "./Components/ViewAllContact";
import EditContact from "./Components/EditContact";
import ViewContact from "./Components/ViewContact";
import NotFound from "./Components/NotFound"; 


function App() {
  return (
    <>
      <div className="container-fluid"> 
        <Navbar />
        <Routes>
          <Route path={'/'} element={<Navigate to={'contact/list'} />} />
          <Route path={'/contact/list'} element={<ContactList/>} />
          <Route path={'/contact/add'} element={<AddContact />} />
          <Route path={'/contact/allview/:contactId'} element={<ViewAllContact />} />
          <Route path={'/contact/view/:contactId'} element={<ViewContact />} />
          <Route path={'/contact/edit/:contactId'} element={<EditContact />} />
          <Route path={'*'} element={<NotFound /> } />
        </Routes>
      </div>
    </>
  );
}

export default App;
