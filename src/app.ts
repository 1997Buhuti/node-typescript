import express, { Request, Response } from "express";
import mongoose, { ConnectOptions } from "mongoose";
import Kitten from "./models/KittenClass";
import "dotenv/config";
import { getModelForClass } from "@typegoose/typegoose";
const app = express();

if (process.env.CONNECTION_STRING) {
  mongoose
    .connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "typgoose_demo",
    } as ConnectOptions)
    .then(() => {
      console.log("Database Connection is ready...");
    })
    .catch((err) => {
      console.log(err);
    });
}

app.get("/", (req: Request, res: Response): void => {
  res.json({ message: "Please Like the Video!" });
});

app.post(
  "/addKittens",
  async (req: Request, res: Response<Kitten>): Promise<void> => {
    try {
      const KittenModel = getModelForClass(Kitten);
      const doc = new KittenModel({
        name: res,
        species: res,
      });
      await doc.save().then((value) => {
        console.log(value);
        res.send("Value inserted");
      });
    } catch (err) {
      console.error(err);
    }
  }
);

app.listen("3001", (): void => {
  console.log("Server Running!");
});
function KittenClass(KittenClass: any) {
  throw new Error("Function not implemented.");
}
