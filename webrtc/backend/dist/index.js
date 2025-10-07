"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let senderSocket = null;
let recieverSocket = null;
wss.on('connection', function (ws) {
    ws.on('error', console.error);
    ws.on('message', function message(data) {
        const message = JSON.parse(data);
        if (message.type === 'sender') {
            senderSocket = ws;
            console.log("sender set");
        }
        else if (message.type === 'reciever') {
            recieverSocket = ws;
            console.log("reciever set");
        }
        else if (message.type === 'createOffer') {
            if (ws !== senderSocket)
                return;
            recieverSocket?.send(JSON.stringify({ type: 'createOffer', sdp: message.sdp }));
        }
        else if (message.type === 'createAnswer') {
            if (ws !== recieverSocket)
                return;
            senderSocket?.send(JSON.stringify({ type: 'createAnswer', sdp: message.sdp }));
        }
        else if (message.type === 'iceCandidate') {
            if (ws === senderSocket) {
                recieverSocket?.send(JSON.stringify({ type: 'iceCandidate', candidate: message.candidate }));
            }
            else if (ws === recieverSocket) {
                senderSocket?.send(JSON.stringify({ type: 'iceCandidate', candidate: message.candidate }));
            }
        }
    });
    ws.send('something');
});
//# sourceMappingURL=index.js.map