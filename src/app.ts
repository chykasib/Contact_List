import express, { Application } from "express";
const app: Application = express();
import cors from "cors";
import { ContactInfoRoutes } from "./app/config/modules/contactList/contactList.route";

app.use(express.json());
app.use(cors());
app.use(express.Router());

//application routes
app.use("/api/v1/contactInfo", ContactInfoRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
