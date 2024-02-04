import express from "express";
import users from "../../controllers/users/users";

const userRouter = express.Router();


userRouter.post("/getusers", users.getusers)

export default userRouter