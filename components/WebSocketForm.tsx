"use client";

import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import {
    ClientToServerEvents,
    ServerToClientEvents,
} from "@/types/chat.interface";
import { Infos } from "@prisma/client";
import InfosList from "./infos/infosList";

const SOCKET_URL = "http://localhost:3001";

interface WebSocketForm {
    infos: Infos[];
}

export function WebSocketForm({ infos }: WebSocketForm) {
    const [messages, setMessages] = useState<Infos[]>(infos);
    const [, setSocket] = useState<Socket<
        ServerToClientEvents,
        ClientToServerEvents
    > | null>(null);

    useEffect(() => {
        const newSocket: Socket<ServerToClientEvents, ClientToServerEvents> =
            io(SOCKET_URL, { transports: ["websocket"] });

        setSocket(newSocket);

        newSocket.on("msgToClient", (message: Infos) => {
            console.log(`mensagem recebida do socket`, message);
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            newSocket.close();
        };
    }, []);

    return (
        <>
            <div className="w-full max-w-[1200px] mx-auto p-4 grid grid-cols-1 gap-5 my-10">
                <h2 className="text-white text-xl text-center mx-auto">
                    infos: {messages.length}
                </h2>

                <div className="w-full">
                    <InfosList data={messages} />
                </div>
            </div>
        </>
    );
}
