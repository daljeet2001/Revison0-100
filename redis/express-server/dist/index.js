import express from "express";
import { createClient } from "redis";
const app = express();
const client = createClient();
app.use(express.json());
client.on('error', (err) => { console.log(`Redis erroro ${err}`); });
app.get("/", (req, res) => {
    res.send("hello from express server");
});
app.post("/submit", async (req, res) => {
    const problemId = req.body.problem_id;
    const code = req.body.code;
    const language = req.body.language;
    console.log(`reb.body is ${req.body}`);
    try {
        await client.lPush("front", JSON.stringify({ problemId, code, language }));
        //store in database
        res.status(200).send("Submission recieved and stored");
    }
    catch (e) {
        console.log(`unexpected errr occured`, e);
        res.status(500).send("request timeout");
    }
});
async function startServer() {
    try {
        await client.connect();
        console.log("Connected to redis");
        app.listen(8080, () => console.log(`server is listening on port 8080`));
    }
    catch (err) {
        console.log(`eror while starting server,${err}`);
    }
}
startServer();
//# sourceMappingURL=index.js.map