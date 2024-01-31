import React from "react";

type AccordionTitlePropsType = {
    title: string
}
export const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <div><h3>{props.title}</h3></div>
    )
}