import * as yup from "yup";

export default class Person {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  getId = () => this.id;
  getName = () => this.name;
  getAge = () => this.age;
  setId = (id) => {
    this.id = id;
  };
  setName = (name) => {
    this.name = name;
  };
  setAge = (age) => {
    this.age = age;
  };
  toString = () =>
    JSON.stringify({ id: this.id, name: this.name, age: this.age });
}

const schema = yup.object({
  name: yup.string().required("Name is required"),
  age: yup.number().typeError("Age is Required")
})

export { schema };