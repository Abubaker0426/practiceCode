const PORT = 5000; // this is the port used for data sending and receiving
const express = require("express"); // frame work to build a server
const axios = require("axios"); // send and receive the data
const mysql = require("mysql"); // data base

const app = express(); // to use server
app.use(express.json()); //json formatted data

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "survey_db",
});
db.connect((err) => {
  if (err) {
    console.log("not connected");
    throw err;
  } else {
    console.log("MySql Connected Successfully!");
  }
});

// app.get("/studentdata", (req, res) => {
//   //    res.send('Hello World');
//   let sql = "SELECT * FROM project1_db.student_marks;";
//   db.query(sql, async (err, data) => {
//     if (err) {
//       throw err;
//     }
//     console.log("this is your data", data);
//     return res.status(200).json({
//       status: true,
//       message: "you got the data",
//       data,
//     });

//     //   res.send('you got the data');
//   });
// });

// app.get("/sameer", (req, res) => {
//   //    res.send('Hello World');
//   let sql = "SELECT * FROM project1_db.students";
//   db.query(sql, async (err, data) => {
//     if (err) {
//       throw err;
//     }
//     console.log("this is your data", data);
//     return res.status(200).json({
//       status: true,
//       message: "you got the data",
//       data,
//     });

//     //   res.send('you got the data');
//   });
// });

// app.post("/insertdata", (req, res) => {
//   const Data = req.body;
//   // console.log("output1", userRegisterData);
//   let send = {
//       name:Data.name,
//       s_address:Data.s_address,
//       regno: Data.regno,
//       email: Data.email,
//       mobile: Data.mobile
//   };

//   let sqlInsert = "INSERT INTO students SET ?";
//   db.query(sqlInsert, send, (err, data) => {
//     if (err) {
//       console.error(err);
//       return res
//         .status(500)
//         .json({ status: false, message: "Failed to add student" });
//     }

//     return res.json({
//       status: true,
//       message: "student saved successfully!",
//       data
//     });
//   });
// });

app.post("/register", (req, res) => {
  const Data = req.body;
  console.log("output1", Data);

  let send = {
    // f_name: Data.f_name,
    // m_name: Data.m_name,
    // l_name: Data.l_name,
    // country_code: Data.country_code,
    // phone: Data.phone,
    // dob: Data.dob,
    // gender: Data.gender,
    // house_no: Data.house_no,
    // locality: Data.locality,
    // masjid_name: Data.masjid_name,
    // verify: Data.verify,

  // m_id : Data.m_id,
    id_fk : Data.id_fk,
    name_of_hd_of_family : Data.name_of_hd_of_family,
    total_no_of_fmly_mem : Data.total_no_of_fmly_mem,
    name : Data.name,
    age : Data.age,
    gender : Data.gender,
    role : Data.role,
    marital_status : Data.marital_status,
    education : Data.education,
    attending_school : Data.attending_school,
    attending_madrasa : Data.attending_madrasa,
    occupation : Data.occupation,
    source_of_income : Data.source_of_income,
    monthly_income : Data.monthly_income,
    aadhaar_card : Data.aadhaar_card,
    voter_id_card : Data.voter_id_card,
    health_card : Data.health_card,
    weak : Data.weak,
    chronic_disease : Data.chronic_disease,
    ration_card : Data.ration_card,
    labour_card : Data.labour_card,
    bank_account : Data.bank_account,
    house_type : Data.house_type,
    ownership : Data.ownership,
    electricity : Data.electricity,
    water_connection : Data.water_connection,
    toilet : Data.toilet,
    mode_of_transport : Data.mode_of_transport,
    // created_at : Data.created_at,
    // updated_at : Data.updated_at,
    // created_at: Data.created_at,
    // updated_at: Data.updated_at,

  };

  let sqlInsert = "INSERT INTO member_user SET ?";
  db.query(sqlInsert, send, (err, data) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ status: false, message: "Failed to Register " });
    }

    return res.json({
      status: true,
      message: "Registered successfully!",
      data,
    });
  });
});

// app.post("/login", (req, res) => {
//   const Data = req.body;
//   // console.log("output1", userRegisterData);
//   let send = {
//     password:Data.password,
//       email: Data.email
//   };
//   let sql = SELECT * FROM project1_db.users where email= '${send.email}' AND password='${send.password}' ;;
// console.log('sql', sql);
//   db.query(sql, async (err, data) => {
//     if (err) {
//       // throw err;
//       return res.status(500).json({
//         status: true,
//         message: "Invalid email or password",
//         data,
//       });
//     }
//     console.log("Logged in successfully", data);
//     return res.status(200).json({
//       status: true,
//       message: "Logged in successfully",
//       data,
//     });

//   });
// });

// app.listen(PORT, () => {
//   console.log(Server is running at http://localhost:${PORT});
// });

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on port 5000");
  }
});
