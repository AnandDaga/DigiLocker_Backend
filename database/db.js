import mongoose from "mongoose";
const connection = mongoose
  .createConnection(`mongodb://localhost:27017/PocketID`)
  .on("open", () => {
    console.log("Connected to MongoDB");
  })
  .on("error", () => {
    console.log("MongoDB Connection Error: ", error);
  });
export default connection;