import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://mayurnish18:mayur123@cluster0.ks1hcpc.mongodb.net/"
  );
  console.log("Mongodb Connected");
};

