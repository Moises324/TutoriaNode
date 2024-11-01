const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { tracker } = require("./middlewares/tracker");
const { getBooks, verificarCredenciales, deleteBooks } = require("./consultas");

app.listen(3000, console.log("SERVER ON"));
app.use(cors());
app.use(express.json());
app.use(tracker);

app.get("/books", async (req, res) => {
  try {
    const books = await getBooks();
    res.json(books);
  } catch (error) {
    res.status(error.code || 500).send(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    await verificarCredenciales(email, password);
    const token = jwt.sign({ email }, "az_AZ");
    //console.log(email, password);
    res.send(token);
  } catch (error) {
    res.status(error.code || 500).send(error);
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const Authorization = req.header("Authorization");
    const token = Authorization.split("Bearer ")[1];
    //console.log(token);
    jwt.verify(token, "az_AZ");
    //console.log(jwt.decode(token));
    const { email } = jwt.decode(token);
    await deleteBooks(id);
    res.send(`El usuario ${email} ha eliminado el libro con id ${id}`);
  } catch (error) {
    console.error(error.message);
    res.status(error.code || 500).send(error);
  }
});
