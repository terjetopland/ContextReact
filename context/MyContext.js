import {createContext, useEffect, useState} from "react";

const MyContext = createContext({});

export const MyContextProvider = ({children}) => {
    const [area, setArea] = useState(0)
    const [isCalculating, setIsCalculating] = useState(false)

    const [inputList, setInputList] = useState([])

    const handleInputChange = (id, value) => {
        // hvis verdien er ikke et tall(NaN, not a number), returner
        if (isNaN(value)) {
            return;
        }

        // hvis verdien er et tall, oppdater inputList
        const newInputList = inputList.map((input) =>
            input.id === id ? { ...input, value: parseFloat(value) || 0 } : input
        );
        console.log(id, value, newInputList)

        // setter inputList
        setInputList(newInputList);

        // summerer alle verdier i inputList
        const sum = newInputList.reduce((accumulator, input) => accumulator + input.value, 0);
        setArea(sum);
    };
    const addInputField = () => {
        setInputList([...inputList, { id: inputList.length, value: ''}]);
    };
    const removeInputField = () => {
        setInputList(inputList.slice(0,-1));
    }
    useEffect(() => {
        const sum = inputList.reduce((accumulator, input) => accumulator + input.value, 0 );
        setArea(sum)
    })

    const value = {
        area,
        setArea,
        isCalculating,
        setIsCalculating,
        inputList,
        setInputList,
        handleInputChange,
        addInputField,
        removeInputField
    }

    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    );
}

export default MyContext;
