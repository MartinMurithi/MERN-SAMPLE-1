const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT;
const MONGO_URI = `mongodb+srv://wachiramartin84:${process.env.MONGO_ATLAS_KEY}@cluster0.t1raaag.mongodb.net/`;
const { router } = require("./routes/test");

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err.message));

app.use(cors());
app.use("/", router);
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
