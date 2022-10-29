const express = require("express");
const dbConnect = require("./dbConnect");

const app = express();
app.use(express.json());
const itemsRoute = require("./routes/itemsRoute");

const path = require("path");
if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

const PORT = process.env.PORT || 4000;

app.use("/api/items/", itemsRoute);
app.get("/", (req, res) => res.send("Hello World from home api!"));
app.listen(PORT, () => console.log(`Node Js server running at port ${PORT}`));

//node-express
