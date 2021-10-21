const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
const port = 5000;

app.get("/", (req, res) => {
  res.send("I am excited with my hair");
});

const users = [
  { id: 0, name: "Shabana", email: "Sabana@gmail.com", phone: "01788888888" },
  { id: 1, name: "Sabnur", email: "Sabnur@gmail.com", phone: "01788888888" },
  {
    id: 2,
    name: "Srabonty",
    email: "Srabonty@gmail.com",
    phone: "01788888888",
  },
  { id: 3, name: "Sonia", email: "Sonia@gmail.com", phone: "01788888888" },
  {
    id: 4,
    name: "Sporshia",
    email: "Sporshia@gmail.com",
    phone: "01788888888",
  },
  {
    id: 5,
    name: "Shusmita",
    email: "Shusmita@gmail.com",
    phone: "01788888888",
  },
  { id: 6, name: "Sakira", email: "Sakira@gmail.com", phone: "01788888888" },
];
app.get("/users", (req, res) => {
  const search = req.query.search;
  //use query parameter
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLowercase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

//app method
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("Hitting the post", req.body);
  // res.send(JSON.stringify(newUser));
  res.json(newUser);
});

//dynamic api
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});
app.get("/fruits", (req, res) => {
  res.send(["mango", "oranges", "banana"]);
});
app.get("/fruits/mangoes/fazli", (req, res) => {
  res.send("Yummy yummy tok marka fazli");
});
app.listen(port, () => {
  console.log("Listening to port", port);
});
