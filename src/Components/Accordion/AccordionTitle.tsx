import React from "react";

type AccordionTitlePropsType = {
    title: string
}
export const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <div style={{userSelect: 'none'}}><h3>{props.title}</h3></div>
    )
}