import { createContext } from "react";
import { Games } from "../types/games";
export interface User {
    accountId: string;
    gameName: string;
    id: string;
    profileIconId: number;
    puuid: string;
    revisionDate: number;
    summonerLevel: number;
    tagName: string;
}

export interface UserContextType {
    user: User | null;
    setUser: (user: User | null) => void;
    server: string | null;
    setServer: (server: string | null) => void;
    games: Games | null,
    setGames: (games: Games | null) => void;
}

const defaultState: UserContextType = {
    user: null,
    setUser: () => {},
    server: null,
    setServer: () => {},
    games: null,
    setGames: () => {},
};

const UserContext = createContext<UserContextType>(defaultState);

export default UserContext;
