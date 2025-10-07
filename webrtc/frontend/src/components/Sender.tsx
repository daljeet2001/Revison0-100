import React from 'react'

const Sender = () => {
    const [socket, setSocket] = React.useState<WebSocket | null>(null);
    const [pc, setPc] = React.useState<RTCPeerConnection | null>(null)

    React.useEffect(() => {

        const ws = new WebSocket("ws://localhost:8080")
        ws.onopen = () => {
            ws.send(JSON.stringify({ type: 'sender' }))
            setSocket(ws)
        }

    }, [])

    async function startSendingVideo() {
        if (!socket) return;

        socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            if (message.type === "createAnswer") {
                pc.setRemoteDescription(new RTCSessionDescription(message.sdp))
                console.log("Answer recieved")
            }
            else if (message.type === "iceCandidate") {
                pc.addIceCandidate( new RTCIceCandidate(message.candidate));
            }

        }

        const pc = new RTCPeerConnection();
        setPc(pc)


        pc.onnegotiationneeded = async () => {
            console.log("negotiation started")
            const offer = await pc.createOffer()
            await pc.setLocalDescription(offer)
            socket?.send(JSON.stringify({ type: "createOffer", sdp: pc.localDescription }))
        }

        pc.onicecandidate = (event) => {
            console.log(event)
            if (event.candidate) {
                socket?.send(JSON.stringify({ type: "iceCandidate", candidate: event.candidate }))
            }
        }

        // const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        // pc.addTrack(stream.getVideoTracks()[0])
        getCameraStreamAndSend(pc)

    }

    const getCameraStreamAndSend = (pc: RTCPeerConnection) => {
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
            const video = document.createElement('video');
            video.srcObject = stream;
            video.play();
            // this is wrong, should propogate via a component
            document.body.appendChild(video);
            stream.getTracks().forEach((track) => {
                pc?.addTrack(track,stream);
            });
        });


    }


    return (
        <div>
            Sender
            <button onClick={startSendingVideo} > Send Video</button>
        </div>
    )
}

export default Sender
