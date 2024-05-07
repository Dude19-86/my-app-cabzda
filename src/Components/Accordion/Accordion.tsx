import React, {useState} from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

export type ItemsType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    onChange: (value: boolean) => void
    items: ItemsType[]
    onClick: (value: any) => void
}
export const Accordion = (props: AccordionPropsType) => {

    return (
        <div>
            <AccordionTitle onClick={() => {props.onChange(!props.collapsed)
            }} title={props.titleValue}/>
            {!props.collapsed ? <AccordionBody items={props.items} onClick={props.onClick}/> : null}
        </div>
    )
}