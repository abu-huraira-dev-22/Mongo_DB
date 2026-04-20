const express = require("express");
const mongoose = require("mongoose");
const Users = require("./models/UsersSchema");

const app = express();

const PORT = 8000;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://huraira_db_user:huraira_db_user@cluster0.0mrqd3o.mongodb.net/",
  );
  console.log("Database is connected");
}

app.get("/health", (req, res) => {
  res.send({
    status: true,
    message: "Server is working fine",
  });
});

app.post("/addUser", async (req, res) => {
  const myUser = {
    name: "Huraira",
  };

  try {
    const small = await Users.create(myUser)

    res.send({
      status: true,
      message: "User Added Successfully",
    });
  } catch (error) {
    console.log(error, '==>> Error')
  }
});

app.listen(PORT, () => {
  console.log("Application is working on port number " + PORT);
});
