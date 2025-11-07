"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws");
const app = (0, express_1.default)();
const HttpServer = app.listen(8080);
const wss = new ws_1.WebSocketServer({ server: HttpServer });
wss.on('connection', (ws) => {
    ws.on('error', console.error);
    ws.on('message', (data, isBinary) => {
        console.log(`message in ws server`, data.toString());
        wss.clients.forEach((client) => {
            if (client.readyState === ws_1.WebSocket.OPEN) {
                client.send(data.toString());
                console.log(`message propogated to clients`);
            }
        });
    });
});
//# sourceMappingURL=index.js.map