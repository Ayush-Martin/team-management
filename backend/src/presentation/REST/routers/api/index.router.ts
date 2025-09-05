import { Router } from "express";
import publicRouter from "./public.router";
import adminRouter from "./admin.router";
import managerRouter from "./manager.router";
import memberRouter from "./member.router";

const apiRouter = Router();

apiRouter.use('/',publicRouter)
apiRouter.use('/admin',adminRouter)
apiRouter.use('/manager',managerRouter)
apiRouter.use('/member',memberRouter)

export default apiRouter;
