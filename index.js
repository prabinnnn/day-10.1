const express = require("express");
const app = express();
const indexofroute = require("./routes");
app.use(express.json());
app.use("/", indexofroute);
app.use((err, next, res, req) => {
  newerr = err ? err.toString() : "something missoing";
  res.status(500).json({ msg: newerr });
});
app.listen(8000, () => {
  console.log("app is runing");
});
