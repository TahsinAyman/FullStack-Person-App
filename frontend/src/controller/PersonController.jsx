import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Person from "../model/Person";
import { jsonListToObj, jsonToObj } from "../repository/PersonRepository";
import application from "../resources/application.json";
import {
  addPerson,
  deletePerson,
  fetchPersonById,
  fetchPersons,
  fetchTotalPages,
  updatePerson,
} from "../service/PersonService";
import PersonAdd from "../views/person/PersonAdd";
import PersonListView from "../views/person/PersonListView";
import PersonUpdate from "../views/person/PersonUpdate";

export function FetchPerson() {
  const [persons, setPersons] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchTotalPages(setTotalPages);
    fetchPersons(setPersons, page);
  }, [page]);

  return (
    <PersonListView
      persons={persons}
      setPage={setPage}
      totalPages={totalPages}
    />
  );
}

export function AddPerson() {
  const [person, setPerson] = useState(null);
  const [message, setMessage] = useState("");
  const [alertType, setAlertType] = useState("info");
  const [open, setOpen] = useState(false);

  const response = (message, alertType) => {
    setMessage(message);
    setAlertType(alertType);
    setOpen(true);
  };

  useEffect(() => {
    if (person) {
      addPerson(jsonToObj(person), response);
    }
  }, [person]);

  return (
    <PersonAdd
      setPerson={setPerson}
      message={message}
      alertType={alertType}
      open={open}
      setOpen={setOpen}
    />
  );
}

export function UpdatePerson() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [changedPerson, setChangedPerson] = useState(null);
  const [message, setMessage] = useState("");
  const [alertType, setAlertType] = useState("info");
  const [open, setOpen] = useState(false);

  const response = (message, alertType) => {
    setMessage(message);
    setAlertType(alertType);
    setOpen(true);
  };

  useEffect(() => {
    if (changedPerson) {
      updatePerson(id, changedPerson, response)
    }
  }, [changedPerson]);

  useEffect(() => {
    fetchPersonById(id, setPerson);
  }, []);

  if (person) {
    return (
      <>
        <PersonUpdate
          message={message}
          alertType={alertType}
          open={open}
          setOpen={setOpen}
          currentPerson={jsonToObj(person)}
          setPerson={setChangedPerson}
        />
      </>
    );
  } else {
    return;
  }
}

export function DeletePerson() {
  const { id } = useParams();
  const navigate = useNavigate();
  const finish = () => {
    navigate("/");
  };

  useEffect(() => {
    if (id) {
      deletePerson(id, finish);
    }
  }, []);

  return;
}
