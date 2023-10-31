import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { postsRouter } from "./routes/post-routes.js";
import { userRouter } from "./routes/user-routes.js";

import { env } from "./settings/envs.js";
import { authenticationMiddleware } from "./middlewares/authentication-middleware.js";
import { authorizationMiddleware } from "./middlewares/authorization-middleware.js";

const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

// app.use(validatePost);

app.use(
  "/posts",
  authenticationMiddleware,
  authorizationMiddleware,
  postsRouter
);
app.use("/users", userRouter);

app.listen(env.PORT, () => {
  console.log(`server on port ${env.PORT}`);
});
