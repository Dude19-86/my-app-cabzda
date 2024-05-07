import React, {useRef, useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'input',

}

export const UnControlledInput = () => {
    return (
        <input/>
    )
}
export const TrackValueOfUnControlledInput = () => {
    const [value, setValue] = useState('')
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(
            e.currentTarget.value)
    }
    return (
        <><input onChange={onChange}/> - {value}
        </>
    )
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.target.value)
    }
    return <input value={parentValue} onChange={onChange}/>
}
export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.target.checked)
    }
    return <input type={"checkbox"} checked={parentValue} onChange={onChange}/>
}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setParentValue(event.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={"1"}>Minsk</option>
        <option value={"2"}>Moskovitz</option>
        <option value={"3"}>Kiev</option>
    </select>
}

export const GetValueValueOfUnControlledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        setValue(inputRef.current!.value)
        inputRef.current!.value = ''
    }
    return (
        <><input ref={inputRef}/>
            <button onClick={save}>save
            </button>
            - actual value: {value}</>
    )
}
export const ControlledInputWithFixedValue = () => <input value={'it-incubator.by'}/>
