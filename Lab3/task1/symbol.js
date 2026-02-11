const id = Symbol("id");

const user = {
  name: "Idffdn",
  [id]: 123
};

console.log(user[id]);