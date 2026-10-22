import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const dbconnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "Restaurant",
    })
    .then(() => {
      console.log("Database Connected Succesfully");
    })
    .catch((err) => {
      console.log(`Errors occur while connecting database : ${err}`);
    });
};

export default dbconnection;
