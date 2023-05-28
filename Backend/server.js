const express = require("express");
const cors = require("cors");

const db = require("./model");

const app = express();

var corOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//simple route

app.get("/", (req, res) => {
  res.json({ message: "Welcome to venkatesh server" });
});

//routes
require("./routes/teams.routes")(app);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`server is started at port ${PORT}`);
});

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("********connected to db******");
  })
  .catch((err) => {
    console.log("cannot connect to the db!", err);
    process.exit();
  });
