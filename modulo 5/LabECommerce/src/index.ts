import app from "./app"
import createUser from "./endpoints/createUser";
import getAllUsers from "./endpoints/getAllUsers";
import postProduct from "./endpoints/postProduct";
import getAllProducts from "./endpoints/getAllProducts";
import postPurchases from "./endpoints/postPurchases";
import getAllPurchasesByUser from "./endpoints/getAllPurchasesByUser";


app.get("/users", getAllUsers)
app.get("/products", getAllProducts)
app.get("/users/:user_id/purchases", getAllPurchasesByUser)

app.put("/users", createUser)
app.post("/products", postProduct)
app.post("/purchases", postPurchases)

