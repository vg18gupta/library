const express = require("express");
const mongoose = require ("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/api-routes");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/api", apiRoutes);

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://vishal:123@cluster0-j0yto.mongodb.net/test?retryWrites=true&w=majority";


mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://vishal:123@cluster0-j0yto.mongodb.net/test?retryWrites=true&w=majority");

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
