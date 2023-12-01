import mongoose from "mongoose";

const db = async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};

export default db;
