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

app.post("/register", (req, res) => {
  const Data = req.body;
  console.log("output1", Data);
  let send = {
    f_name: Data.f_name,
    m_name: Data.m_name,
    l_name: Data.l_name,
    country_code: Data.country_code,
    phone: Data.phone,
    dob: Data.dob,
    gender: Data.gender,
    house_no: Data.house_no,
    locality: Data.locality,
    masjid_name: Data.masjid_name,
    verify: Data.verify,
    // is_active: Data.is_active,
    // created_at: Data.created_at,
    // updated_at: Data.updated_at,
  };

  let sqlInsert = "INSERT INTO reg_users SET ?";
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

// UPDATE CODE

// app.put("/put/:id", (req, res) => {
//   const userId = req.params.id;
//   const updatedUser = req.body;

//   // Constructing user object with updated fields
//   let user = {
//     f_name: updatedUser.f_name,
//     m_name: updatedUser.m_name,
//     l_name: updatedUser.l_name,
//     country_code: updatedUser.country_code,
//     phone: updatedUser.phone,
//     dob: updatedUser.dob,
//     gender: updatedUser.gender,
//     house_no: updatedUser.house_no,
//     locality: updatedUser.locality,
//     masjid_name: updatedUser.masjid_name,
//     verify: updatedUser.verify,
//   };

//   console.log("user", user);

//   // Constructing SQL query
//   const sql = "UPDATE reg_users SET ? WHERE id = ?";

//   // Executing SQL query
//   db.query(sql, [user, userId], (err, result) => {
//     console.log("result", result);
//     if (err) {
//       console.error("Error executing query: " + err.stack);
//       return res.status(500).json({ error: "Internal Server Error" });
//     }

//     if (result.affectedRows === 0) {
//       return res.status(404).json({ error: "User not found" });
//     }
//     res.json({ message: "User updated successfully" });
//   });
// });

//updateing  put mrthod
app.put("/put/:id", (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;

  // Constructing user object with updated fields
  let send = {
    f_name: updatedUser.f_name,
    m_name: updatedUser.m_name,
    l_name: updatedUser.l_name,
    country_code: updatedUser.country_code,
    phone: updatedUser.phone,
    dob: updatedUser.dob,
    gender: updatedUser.gender,
    house_no: updatedUser.house_no,
    locality: updatedUser.locality,
    masjid_name: updatedUser.masjid_name,
    verify: updatedUser.verify,
  };

  console.log("user", send);

  // Constructing SQL query with parameters
  const sql = "UPDATE reg_users SET ? WHERE id = ?";

  // Execute SQL query with user object and user ID as parameters
  db.query(sql, [send, updatedUser.id], (err, result) => {
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


// "user_codes"

app.post("/code", (req, res) => {
  const Data = req.body;
  console.log("output1", Data);

  const randomCode = Math.floor(Math.random() * 900000) + 100000;

  let send = {
    id_fk: Data.id_fk,
    code: randomCode,
  };

  let sqlInsert = "INSERT INTO user_codes SET ?";
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

app.delete("/delete/:id", (req, res) => {
  //    res.send('Hello World');
  const fetchid = req.params.id;
  let sql = " DELETE  FROM reg_users WHERE id = ?";
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


app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on port 8000");
  }
});
