import React, {createContext, useState} from 'react';

export const Store = createContext<any>({
    user: {},
    setUser: (State) => {}
});

export const StoreProvider = (props: any) => {
    const [user, setUser] = useState();

    return (
        <Store.Provider value={{user, setUser}}>
            {props.children}
        </Store.Provider>
    );
}