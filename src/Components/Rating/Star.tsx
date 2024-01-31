import React from "react";

type StarPropsType = {
    selected: boolean
    title?: string
    color?: string
}
export const Star = (props: StarPropsType) => {
    return (
        <>
            {props.selected ? <span style={{color: props.color}}><b>{props.title}</b> </span> :
                <span style={{color: props.color}}>{props.title} </span>}
        </>

    )
}