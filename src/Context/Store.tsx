import React, { useState } from "react";

interface IStore {
    user: any;
    setUser: (State: any) => void;
}

const Store = React.createContext<IStore>({
    user: {},
    setUser: (State: any) => {},
});

const StoreProvider = (props: any) => {
    const [user, setUser] = useState({});
    return (
        <Store.Provider value={{ user, setUser }}>
            {props.children}
        </Store.Provider>
    );
};

export { Store, StoreProvider };
