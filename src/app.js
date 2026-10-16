import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"//to use CRUD opperations on the cookies coming 


const app=express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials: true
}))
 
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


export {app} // data comes form url-> params
