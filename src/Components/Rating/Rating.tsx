import React from "react";
import {Star} from "./Star";

type RatingProps = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}
export const Rating = (props: RatingProps) => {
    return (
        <div>
            <Star selected={props.value > 0} title={"Star"}/>
            <Star selected={props.value > 1} title={"Star"}/>
            <Star selected={props.value > 2} title={"Star"}/>
            <Star selected={props.value > 3} title={"Star"}/>
            <Star selected={props.value > 4} title={"Star"}/>
        </div>
    )
}