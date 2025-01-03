import React, { useState, ReactNode } from "react";
import UserContext from "../utilities/globalContext";
import { Games } from "../types/games";

interface UserProviderProps {
    children: ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<{
        accountId: string;
        gameName: string;
        id: string;
        profileIconId: number;
        puuid: string;
        revisionDate: number;
        summonerLevel: number;
        tagName: string;} | null>(null);
    const [server, setServer] = useState<string|null>(null);
    const [games, setGames] = useState<Games | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser, server, setServer, games, setGames }}>
            {children}
        </UserContext.Provider>
    );
};


export default UserProvider;