import React, {useReducer} from 'react';
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
import {AccordionPropsType} from "./Accordion";
import {reducer} from "./Reducer";

export const UncontrolledAccordion = (props: AccordionPropsType) => {
    console.log('Accordion rendering')

    // let [collapsed, setCollapsed] = useState(false);
    let [state, dispatch] = useReducer(reducer, {collapsed: false});

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>*/}
            <AccordionTitle title={props.titleValue} onClick={() => {dispatch({type: 'TOGGLE-COLLAPSED'})}}/>
            {!state.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
        </div>
    );
};