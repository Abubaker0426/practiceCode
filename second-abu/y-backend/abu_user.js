const PORT = 5000; // Port used for data sending and receiving
const express = require("express"); // Framework to build a server
const mysql = require("mysql"); // Database

const app = express(); // Use Express server
app.use(express.json()); // Parse JSON data

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "abubaker",
});
db.connect((err) => {
  if (err) {
    console.log("Not connected");
    throw err;
  } else {
    console.log("MySql Connected Successfully!");
  }
});

// Middleware for handling JSON parsing errors
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    console.error("JSON parsing error:", err);
    return res
      .status(400)
      .json({ error: "Bad Request", message: "Invalid JSON" });
  }
  next();
});

app.post("/abu_user", (req, res) => {
  const Data = req.body;
  console.log("Received Data:", Data);

  let send = {
    id_fk: Data.id_fk,
    name_of_hd_of_family: Data.name_of_hd_of_family,
    total_no_of_fmly_mem: Data.total_no_of_fmly_mem,
    name: Data.name,
    age: Data.age,
    gender: Data.gender,
    role: Data.role,
    marital_status: Data.marital_status,
    education: Data.education,
    attending_school: Data.attending_school,
    attending_madrasa: Data.attending_madrasa,
    occupation: Data.occupation,
    source_of_income: Data.source_of_income,
    monthly_income: Data.monthly_income,
    aadhaar_card: Data.aadhaar_card,
    voter_id_card: Data.voter_id_card,
  };

  let sqlInsert = "INSERT INTO abu_user SET ?";
  db.query(sqlInsert, send, (err, data) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ status: false, message: "Failed to Register" });
    }

    return res.json({
      status: true,
      message: "Registered successfully!",
      data,
    });
  });
});

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Server is running on port 5000");
  }
});
