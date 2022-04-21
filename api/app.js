import express from "express";
import cors from "cors";
import { Users } from "./users.js";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  const { q } = req.query;
  // console.log(q);

  const search = (data, q) => {
    var filteredData = [];
    var qArray = [];

    for (var i = 0; i < data.length; i++) {
      qArray = q.split(" ");

      var firstname = data[i].first_name.toLowerCase();
      var lastname = data[i].last_name.toLowerCase();
      var email = data[i].email.toLowerCase();
      if (
        qArray.some((qq) => firstname.includes(qq)) ||
        qArray.some((qq) => lastname.includes(qq)) ||
        qArray.some((qq) => email.includes(qq))
      ) {
        filteredData.push(data[i]);
      }
    }
    return filteredData;
  };
  // const keys = ["first_name", "last_name", "email", "gender"];
  // console.log(keys);

  // const search = (data) => {
  //   return data.filter((item) => {
  //     keys.some((key) => item[key].toLowerCase().includes(q));
  //   });
  // };
  // search(Users);
  // console.log(search(Users));

  q ? res.json(search(Users, q).slice(0, 100)) : res.json(Users.slice(0, 100));
});

// app.get("/", (req, res) => {
//   const { q } = req.query;

//   const keys = ["first_name", "last_name", "email", "gender"];

//   const search = (data) => {
//     return data.filter((item) => {
//       keys.some((key) => item[key].toLowerCase().includes(q));
//     });
//   };

//   q ? res.json(search(Users).slice(0, 100)) : res.json(Users.slice(0, 100));
// });

// const db_url = "mongdb://localhost/mern-searchDB";
// mongoose
//   .connect(db_url)
//   .then(
//     app.listen(3001, () => {
//       console.log(`DB connection established successfully!`);
//     })
//   )
//   .catch((err) => console.log(err));

app.listen(3001, () => console.log(`Server started...`));
