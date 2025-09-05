import { Router } from "express";

const publicRouter = Router();

publicRouter.get("/health-check", (req, res) => {
  res.send("server is running");
});

export default publicRouter;
