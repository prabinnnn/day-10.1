const express = require("express");
const app = express();
const indexofroute = require("./routes");
app.use(express.json());
app.use("/", indexofroute);
app.listen(8000, () => {
  console.log("app is runing");
});
