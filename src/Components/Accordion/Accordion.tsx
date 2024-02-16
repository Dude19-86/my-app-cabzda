import React, {useState} from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
    // onClick?: () => void
}
export const Accordion = (props: AccordionPropsType) => {

    const [state, setState] = useState(false)

    return (
        <div onClick={() => {setState(!state)}}>
            <AccordionTitle title={props.titleValue}/>
            {!state && <AccordionBody/>}
        </div>
    )
}