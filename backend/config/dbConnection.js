const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      connect.connection.host,
      connect.connection.name,
      "Database connected"
    );
  } catch (err) {
    console.log(err, "err from catch b");
    process.exit(1);
  }
};
module.exports = connectDb;
