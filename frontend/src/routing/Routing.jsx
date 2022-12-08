import { Route, Routes } from "react-router-dom";
import { AddPerson, DeletePerson, FetchPerson, UpdatePerson } from "../controller/PersonController";
import UrlError from "../views/error/UrlError";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<FetchPerson />}/>
      <Route path="/add" element={<AddPerson />}/>
      <Route path="/update/:id" element={<UpdatePerson />}/>
      <Route path="/delete/:id" element={<DeletePerson />}/>
      <Route path="/*" element={<UrlError />}/>
    </Routes>
  )
}