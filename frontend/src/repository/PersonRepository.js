import Person from "../model/Person";

export function jsonToObj(json) {
  return new Person(json.id, json.name, json.age);
}

export function jsonListToObj(lst) {
  var persons = [];
  lst.map((i) => {
    persons.push(new Person(i.id, i.name, i.age));
  });
  return persons;
}

export function objToJson(obj) {
  return { id: obj.getId(), name: obj.getName(), age: obj.getAge() };
}

export function objListToJson(lst) {
  var persons = [];
  lst.map((i) => {
    persons.push({ id: i.getId(), name: i.getName(), age: i.getAge() });
  });
}
