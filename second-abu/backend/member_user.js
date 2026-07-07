const PORT = 8000; // this is the port used for data sending and receiving
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

app.post("/member", (req, res) => {
  const Data = req.body;
  console.log("output1", Data);
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
    health_card: Data.health_card,
    are_you: Data.are_you,
    chronic_disease: Data.chronic_disease,
    ration_card: Data.ration_card,
    labour_card: Data.labour_card,
    card_type: Data.card_type,
    bank_account: Data.bank_account,
    house_type: Data.house_type,
    ownership: Data.ownership,
    electricity: Data.electricity,
    water_connection: Data.water_connection,
    toilet: Data.toilet,
    mode_of_transport: Data.mode_of_transport,
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

//get method
app.get("/get/:id", (req, res) => {
  //    res.send('Hello World');
  const fetchid = req.params.id;
  let sql = " SELECT * FROM reg_users WHERE id = ?";
  db.query(sql, fetchid, (err, data) => {
    if (err) {
      console.log("Not connect");
      throw err;
    }
    console.log("this is your data", data);
    return res.status(200).json({
      status: true,
      message: "you got the data",
      data,
    });

    //   res.send('you got the data');
  });
});

app.put("/put/:m_id", (req, res) => {
  const userId = req.params.m_id;
  const updatedUser = req.body;

  // Constructing user object with updated fields
  let send = {

    id_fk: updatedUser.id_fk,
    name_of_hd_of_family: updatedUser.name_of_hd_of_family,
    total_no_of_fmly_mem: updatedUser.total_no_of_fmly_mem,
    name: updatedUser.name,
    age: updatedUser.age,
    gender: updatedUser.gender,
    role: updatedUser.role,
    marital_status: updatedUser.marital_status,
    education: updatedUser.education,
    attending_school: updatedUser.attending_school,
    attending_madrasa: updatedUser.attending_madrasa,
    occupation: updatedUser.occupation,
    source_of_income: updatedUser.source_of_income,
    monthly_income: updatedUser.monthly_income,
    aadhaar_card: updatedUser.aadhaar_card,
    voter_id_card: updatedUser.voter_id_card,
    health_card: updatedUser.health_card,
    are_you: updatedUser.are_you,
    chronic_disease: updatedUser.chronic_disease,
    ration_card: updatedUser.ration_card,
    labour_card: updatedUser.labour_card,
    card_type: updatedUser.card_type,
    bank_account: updatedUser.bank_account,
    house_type: updatedUser.house_type,
    ownership: updatedUser.ownership,
    electricity: updatedUser.electricity,
    water_connection: updatedUser.water_connection,
    toilet: updatedUser.toilet,
    mode_of_transport: updatedUser.mode_of_transport,
  };

  console.log("user", send);

  // Constructing SQL query with parameters
  const sql = "UPDATE member_user SET ? WHERE m_id = ?";

  // Execute SQL query with user object and user ID as parameters
  db.query(sql, [send, updatedUser.m_id], (err, result) => {
    if (err) {
      console.error("Error executing query: " + err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User updated successfully" });
  });
});

//get method
app.get("/get/:id", (req, res) => {
  //    res.send('Hello World');
  const fetchid = req.params.id;
  let sql = " SELECT * FROM member_user WHERE id = ?";
  db.query(sql, fetchid, (err, data) => {
    if (err) {
      console.log("Not connect");
      throw err;
    }
    console.log("this is your data", data);
    return res.status(200).json({
      status: true,
      message: "you got the data",
      data,
    });

    //   res.send('you got the data');
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
    console.log("Server is running on port 8000");
  }
});
