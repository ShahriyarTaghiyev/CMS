const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://192.168.78.138/', // Replace with your frontend URL
    credentials: true // Allow credentials (cookies)
}));


// Importing routes

const adminRoutes = require("./routes/adminRoutes")
const usersRoutes = require("./routes/usersRoutes")
const authRoutes = require("./routes/authRoutes")


// Middlewares
app.use("/api/admin", adminRoutes)
app.use("/api/users/", usersRoutes)
app.use("/api/auth", authRoutes)

app.listen(3001, (req, res)=>{
    console.log("server is running")
})

 // test edilmeli 
 