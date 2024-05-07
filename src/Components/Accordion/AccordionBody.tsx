import React from "react";
import {ItemsType} from "./Accordion";
type AccordionBodyPropsType = {
    items: ItemsType[]
    onClick: (value: any) => void
}

export const AccordionBody = (props: AccordionBodyPropsType) => {
    console.log('AccordionTitle rendering')
    return (
        <ul>
            {props.items.map((e, i)=> {
                return <li onClick={() => {props.onClick(e.value)}}
                           key={i}>{e.title}</li>
            })}
        </ul>
    )
}