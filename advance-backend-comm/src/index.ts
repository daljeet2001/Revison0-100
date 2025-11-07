import express from "express";
import { WebSocketServer,WebSocket } from "ws";


const app = express();
const HttpServer = app.listen(8080);

const wss = new WebSocketServer({ server: HttpServer });


wss.on('connection', (ws) => {
    ws.on('error', console.error);
    ws.on('message', (data, isBinary) => {
        console.log(`message in ws server`, data.toString());
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data.toString());
                console.log(`message propogated to clients`)
            }
        })
    })
});





