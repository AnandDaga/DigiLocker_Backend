





import mongoose from "mongoose";

const connection = mongoose
  .createConnection(`mongodb://127.0.0.1:27017/PocketID`)
  .on("open", () => {
    console.log("Connected to MongoDB");
  })
  .on("error", () => {
    console.log("MongoDB Connection Error: ", error);
  });

export default connection;