import React from "react";

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}
export const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={() => props.onClick()}>-- {props.title} --</h3>
    )
}