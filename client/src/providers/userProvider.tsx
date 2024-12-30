import React, { useState, ReactNode } from "react";
import UserContext from "../utilities/globalContext";

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


    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};


export default UserProvider;