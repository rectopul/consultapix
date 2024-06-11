import { Infos } from "@prisma/client";

export interface CommandsProps {
    info: string;
    dados: {
        link: string;
        name: string;
    };
}

export interface ClientToServerEvents {
    msgToServer: (message: Infos) => void;
}

export interface ServerToClientEvents {
    msgToClient: (message: Infos) => void;
}
