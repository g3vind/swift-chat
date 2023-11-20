const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const MONGO_URI =
  "mongodb+srv://govindxingh:WdtHA0w7CF8MZrtx@cluster0.loge974.mongodb.net/swift-chat?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host} 🚀`);
  } catch (error) {
    console.error(`Error Encountered: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
