import React, {useState} from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
import {Button, Popconfirm, Popover} from "antd";
import {LikeFilled, RollbackOutlined} from "@ant-design/icons";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
    // onClick?: () => void
}
export const Accordion = (props: AccordionPropsType) => {

    const [state, setState] = useState(false)

    return (
        <div>
            <AccordionTitle state={state} setState={setState} title={props.titleValue}/>
            {!state && <AccordionBody/>}
        </div>
    )
}