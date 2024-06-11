import { WebSocket, WebSocketServer } from "ws";
import { IncomingMessage } from "http";
import { NextResponse } from "next/server";

export function SOCKET(
    client: WebSocket,
    request: IncomingMessage,
    server: WebSocketServer,
    res: NextResponse
) {
    client.on("message", (message) => {
        server.clients.forEach(async (receiver) => {
            if (receiver === client) return;
            receiver.send(message);
            console.log(`mensagem recebida`, message);
        });
        client.send(message);
    });

    client.on("upgrade", () => {
        console.log(`cliente conectado`);
    });

    client.on("close", () => {
        console.log("A client disconnected!");
    });

    return NextResponse.json({ message: `client connected` });
}
