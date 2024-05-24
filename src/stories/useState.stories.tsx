import {useMemo, useState} from "react";

export default {
    title: 'useState demo',
}


const generateValue = () => {
    console.log("generateValue")
    return Math.floor(Math.random() * 100) + 1
}
export const Example1 = () => {

    // const initValue =  useMemo(generateValue, [])

    console.log("Example1")

    const [counter, setCounter] = useState(generateValue)

    const changer = (state: number) => {
        return state + 1
    }

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}