import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("987654321", 10),
    isAdmin: true,
  },
  {
    name: "Micky Turtle",
    email: "micky@email.com",
    password: bcrypt.hashSync("987654321", 10),
  },
  {
    name: "Donny Turtle",
    email: "donny@email.com",
    password: bcrypt.hashSync("987654321", 10),
  },
];

export default users;
