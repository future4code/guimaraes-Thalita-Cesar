import {app} from "./app"
import { friendshipRouter } from "./controller/Routes/friendshipRouter"
import { postRouter } from "./controller/Routes/postRouter"
import { userRouter } from "./controller/Routes/userRouter"


app.use("/user", userRouter)
app.use("/post", postRouter)
app.use("/friendship", friendshipRouter)