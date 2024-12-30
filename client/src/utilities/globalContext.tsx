import { createContext } from "react";

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
}

const defaultState: UserContextType = {
    user: null,
    setUser: () => {},
};

const UserContext = createContext<UserContextType>(defaultState);

export default UserContext;
