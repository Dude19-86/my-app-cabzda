import React, { useState } from 'react';
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
import {AccordionPropsType} from "./Accordion";

export const UncontrolledAccordion = (props: AccordionPropsType) => {
    console.log('Accordion rendering')

    let [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );
};