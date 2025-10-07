import React from 'react';

const Receiver = () => {
  const [socket, setSocket] = React.useState<WebSocket | null>(null);
  const [pc, setPc] = React.useState<RTCPeerConnection | null>(null);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [stream, setStream] = React.useState<MediaStream | null>(null);

  React.useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    socket.onopen = () => {
      socket.send(JSON.stringify({ type: 'reciever' }));
      setSocket(socket);
      startReceiving(socket);
    };
  }, []);

  const startReceiving = (socket: WebSocket) => {
    const pc = new RTCPeerConnection();
    setPc(pc);

    pc.onicecandidate = (event) => {
      if (event.candidate) {
        socket.send(JSON.stringify({ type: "iceCandidate", candidate: event.candidate }));
      }
    };

    pc.ontrack = (event) => {
      console.log("Track received:", event);
      setStream(event.streams[0]); // ✅ Save stream for later
    };

    socket.onmessage = async (event) => {
      const message = JSON.parse(event.data);
      if (message.type === 'createOffer') {
        await pc.setRemoteDescription(new RTCSessionDescription(message.sdp));
        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);
        socket.send(JSON.stringify({ type: "createAnswer", sdp: pc.localDescription }));
      } else if (message.type === "iceCandidate" && message.candidate) {
        await pc.addIceCandidate(new RTCIceCandidate(message.candidate));
      }
    };
  };

  const handlePlay = () => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
      videoRef.current.play(); // ✅ Now allowed, user clicked
    }
  };

  return (
    <div>
      <h2>Receiver</h2>
      <video ref={videoRef} width="480" controls playsInline></video>
      <br />
      <button onClick={handlePlay}>Play</button>
    </div>
  );
};

export default Receiver;
