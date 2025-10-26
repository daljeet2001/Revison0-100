import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import jwt, { JwtPayload } from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: "http://localhost:5174",
    credentials: true
}))


const JWT_SECRET = process.env.JWT_SECRET!;





app.post("/signin",(req:express.Request,res:express.Response)=>{
    const email = req.body.email;
    const password = req.body.password;

    const token = jwt.sign({
        id:2,
    },JWT_SECRET!);

    res.cookie("token",token);
    res.send("Logged in!")
});

app.post("/user",(req:express.Request,res:express.Response)=>{
    const token = req.cookies.token;
    const decoded = jwt.verify(token,JWT_SECRET!) as JwtPayload;
    res.send({
        userId:decoded.id
    })
});


app.post("/logout",(req:express.Request,res:express.Response)=>{
res.clearCookie("token");
res.send("Logout!")
})

app.get("/", (req: express.Request, res: express.Response) => {
    res.json({messsage:"server healthy"})
});

app.listen(process.env.PORT, () => {
    console.log(`server is listening on ${process.env.PORT}`)
});