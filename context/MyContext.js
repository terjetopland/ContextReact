import {createContext, useState} from "react";

const MyContext = createContext(null);

export const MyContextProvider = ({children}) => {
    const [area, setArea] = useState(0)
    const [isCalculating, setIsCalculating] = useState(false)



    return (
        <MyContext.Provider value={{area, setArea, isCalculating, setIsCalculating}}>
            {children}
        </MyContext.Provider>
    );
}

export default MyContext;