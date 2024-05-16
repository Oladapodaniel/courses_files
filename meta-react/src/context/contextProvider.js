import { useState, createContext } from "react";

export const PageContext = createContext();

const PageContextProvider = (props) => {
    let [ user, setUser ] = useState({ user: "Oladapo" })

 
    return (
        <PageContext.Provider value={{
            user,
            setUser
        }}>
            { props.children }
        </PageContext.Provider>
    )
}

export default PageContextProvider;