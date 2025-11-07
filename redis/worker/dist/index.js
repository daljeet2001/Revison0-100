import { createClient } from "redis";
const client = createClient();
async function workerFn(submission) {
    const { problemId, code, language } = JSON.parse(submission);
    console.log("problem id is ", problemId);
    console.log("code  is ", code);
    console.log("language is ", language);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("done processing submisiin ~workerFn");
}
async function startWorker() {
    try {
        await client.connect();
        console.log("redis connected in worker");
        while (1) {
            try {
                const submission = await client.brPop("front", 0);
                if (!submission)
                    continue;
                await workerFn(submission.element);
                console.log("submission picked and solved");
            }
            catch (err) {
                console.log("erorrr", err);
            }
        }
    }
    catch (err) {
        console.log(`eroro ${err}`);
    }
}
startWorker();
//# sourceMappingURL=index.js.map