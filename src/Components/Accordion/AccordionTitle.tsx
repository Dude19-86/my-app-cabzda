import React from "react";
import {LaptopOutlined, MenuOutlined, PlusCircleFilled, PlusOutlined, XFilled, XOutlined} from "@ant-design/icons";
import {Menu} from "antd";

type AccordionTitlePropsType = {
    title: string
    state: boolean
    setState: (b: boolean) => void
}
export const AccordionTitle = (props: AccordionTitlePropsType) => {



    return (
        <div style={{userSelect: 'none'}}><h3 onClick={() => {props.setState(!props.state)}}><LaptopOutlined/>{props.title}</h3></div>
    )
}