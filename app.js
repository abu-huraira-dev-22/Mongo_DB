const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 8000;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://huraira_db_user:huraira_db_user@cluster0.0mrqd3o.mongodb.net/');
console.log('Database is connected')
}

app.get("/health", (req, res) => {
  res.send({
    status: true,
    message: "Server is working fine",
  });
});

app.listen(PORT, () => {
  console.log("Application is working on port number " + PORT);
});
