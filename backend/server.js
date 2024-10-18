const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const cors = require("cors");
const dotenv = require("dotenv").config();

connectDb();
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // if you need to pass cookies or authentication headers
  })
);
const port = process.env.PORT || 5000;

// This middleware is necessary to recieve req.body
app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoute"));
app.use("/api/users", require("./routes/userRoute"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is listning on port ${port}`);
});
