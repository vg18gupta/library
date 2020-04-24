// const axios = require("axios");
// const router = require("express").Router();
// const Book = require("../models/Book");
// const User = require("../models/User");
// //const booksController = require("../controllers/booksController");

// module.exports = app => {
//   app.get("/books/test", (req, res) => res.json({ msg: "Posts Works" }));

//   app.get("/books", (req, res) => {
//   axios
//     .get("https://www.googleapis.com/books/v1/volumes", { params: req.query })
//     .then(({ data: { items } }) => res.json(items))
//     .catch(err => res.status(422).json(err));
//   });

// // router.route("books/saved")
// //   .get(booksController.findAll)
// //   .post(booksController.create)

// // router.route("/savedBooks/:googleId")
// //   .delete(booksController.remove);

// // module.exports = router;

//   app.get("books/saved", (req,res) => {
//     Book.find()
//       .sort({ date: -1 })
//       .then(books => {
//         books.map(item => {
//           User.findOne({ _id: item.user }, (err, user) => {
//             send.push({ user: user, book: item });
//             console.log(send);
//           });
//         });
//         console.log(send);
//         res.json(send);
//       })
//       .catch(err => res.status(404).json({ nopostsfound: "No posts found" }));
//   });
//   app.post("books/saved", (req,res) => {
//     Book.create(req.body)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
//   });
//   router.route("books/saved/:googleId", (req,res) => {
//     Book.findOne({ googleId: req.params.googleId })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   });
// };

const axios = require("axios");
const router = require("express").Router();
const booksController = require("../controllers/booksController");
const db = require("../models");

router.get("/books", (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes", { params: req.query })
    .then(({ data: { items } }) => res.json(items))
    .catch(err => res.status(422).json(err));
});

router.route("/savedBooks")
  .get(booksController.findAll)
  .post(booksController.create)

router.route("/savedBooks/:googleId")
  .delete(booksController.remove);

module.exports = router;