const role = "admin";

switch (role) {
  case "admin":
    console.log("full access");
    break;
  case "user":
    console.log("limited");
    break;
  default:
    console.log("guest");
}