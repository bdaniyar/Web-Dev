function User(name) {
  this.name = name;
  this.isAdmin = false;
}

const u = new User("Alex");
console.log(u);