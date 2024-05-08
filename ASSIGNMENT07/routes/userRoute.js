import express from "express";
import {
  create,
  deleteUser,
  fetch,
  update,
} from "../controller/userController.js";

const route = express.Router();

route.post("/create", create);
route.get("/all", fetch);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteUser);

export default route;
