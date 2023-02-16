const express = require("express");
const cors = require("cors");
require("dotenv").config();
const usersRoutes = require("./routes/usersRoutes");
const petsRoutes = require("./routes/petsRoutes");
const dbConnection = require("./knex/knex");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use("/users", usersRoutes);
app.use("/pets", petsRoutes);

app.use('*', (req, res) => {
  res.status(404).send('Oops! Page not found');
});

app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).send('Oops! Something went wrong')
});

dbConnection.migrate.latest().then((migration) => {
  if (migration) {
    console.log("Migration ran successfully", migration);
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  }
});
