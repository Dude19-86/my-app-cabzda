import React from "react";
import {RatingValueType} from "./Rating";

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}
export const Star = (props: StarPropsType) => {
    console.log('Star rendering')
    return <span onClick={() => props.onClick(props.value)}>
        {props.selected ? <b>star </b> : 'star '}
    </span>
}