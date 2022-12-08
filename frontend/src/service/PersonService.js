import axios from "axios";
import {
  jsonListToObj,
  jsonToObj,
  objToJson,
} from "../repository/PersonRepository";
import application from "../resources/application.json";

export function fetchPersons(set, page) {
  axios
    .get(`${application.backend}/api/v1/person/fetch/page/${page}/size/10`)
    .then(({ data }) => {
      set(jsonListToObj(data));
    })
    .catch((error) => {
      console.log(error);
    });
}

export function fetchTotalPages(set) {
  axios
    .get(`${application.backend}/api/v1/person/fetch/totalpage/size/10`)
    .then(({ data: { message } }) => {
      set(message);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function addPerson(person, response) {
  axios
    .post(`${application.backend}/api/v1/person/add`, objToJson(person))
    .then(({ data }) => {
      response(data.message, "success");
    })
    .catch((error) => {
      if (error.response.status === 406) {
        response(error.response.data.message, "error");
      }
    });
}

export function deletePerson(id, finish) {
  axios
    .delete(`${application.backend}/api/v1/person/delete/${id}`)
    .then((response) => {
      finish();
    })
    .catch((error) => {
      finish();
    });
}

export function fetchPersonById(id, set) {
  axios
    .get(`${application.backend}/api/v1/person/fetch/${id}`)
    .then((resp) => {})
    .catch(({ response }) => {
      if (response.status === 302) {
        set(jsonToObj(response.data));
      }
    });
}

export function updatePerson(id, person, response) {
  axios
    .put(`${application.backend}/api/v1/person/update/${id}`, person)
    .then(({ data }) => {
      response(data.message, "success");
    })
    .catch((error) => {
      if (error.response.status === 404) {
        response(error.response.data.message, "error");
      }
    });
}
