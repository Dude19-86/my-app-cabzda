import React, {useState} from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

export type AccordionPropsType = {
    titleValue: string,
    onChange: (value: boolean) => void
    collapsed: boolean
}
export const Accordion = (props: AccordionPropsType) => {

    const [state, setState] = useState(false)

    return (
        <div>
            <AccordionTitle onClick={() => {props.onChange(!props.collapsed)
            }} title={props.titleValue}/>
            {props.collapsed ? <AccordionBody/> : null}
        </div>
    )
}