import { app } from "./app";
import { getUser, getUsersByType, getUsersOrTypeByOrder, getUserPerPage} from "./endpoints/getAllUsers";

app.get("/users", getUser);
app.get("/users/:type", getUsersByType);
app.get("/users/order", getUsersOrTypeByOrder);
app.get("/usersPag", getUserPerPage)

