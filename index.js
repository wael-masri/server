const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");


app.use(express.json());
app.use("/assets/videos", express.static(path.join(__dirname, "/assets/videos")));



const itemsRoute = require("./routes/items");
app.use(cors());
app.use(express.json());

//PATHES FOR REST API
app.use("/api/items", itemsRoute);

// BACKEND RUNMIN IN POST 5000 HERE

app.listen(process.env.PORT || PORT, () => {
  console.log(`Backend is running with port ${PORT}..`);
});
