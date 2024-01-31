import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}
export const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            {props.collapsed
                ? <>
                    <AccordionTitle title={props.titleValue}/>
                    <AccordionBody/>
                </>
                : <> <AccordionTitle title={props.titleValue}/>
                </>
            }
        </div>
    )
}