import React from "react";
import {Star} from "./Star";

type RatingProps = {
    value: number
}
export const Rating = (props: RatingProps) => {

    if (props.value === 1) {
        return (
            <div>
                <Star selected={true} title={"Star"}/>
                <Star selected={false} title={"Star"}/>
                <Star selected={false} title={"Star"}/>
                <Star selected={false} title={"Star"}/>
                <Star selected={false} title={"Star"}/>
            </div>
        )
    }
    if (props.value === 2) {
        return (
            <div>
                <Star selected={true} title={"Star"}/>
                <Star selected={true} title={"Star"}/>
                <Star selected={false} title={"Star"}/>
                <Star selected={false} title={"Star"}/>
                <Star selected={false} title={"Star"}/>
            </div>
        )
    }
    if (props.value === 3) {
        return (
            <div>
                <Star selected={true} title={"Star"}/>
                <Star selected={true} title={"Star"}/>
                <Star selected={true} title={"Star"}/>
                <Star selected={false} title={"Star"}/>
                <Star selected={false} title={"Star"}/>
            </div>
        )
    }
    if (props.value === 4) {
        return (
            <div>
                <Star selected={true} title={"Star"}/>
                <Star selected={true} title={"Star"}/>
                <Star selected={true} title={"Star"}/>
                <Star selected={true} title={"Star"}/>
                <Star selected={false} title={"Star"}/>
            </div>
        )
    }
    if (props.value === 5) {
        return (
            <div>
                <Star selected={true} title={"Star"}/>
                <Star selected={true} title={"Star"}/>
                <Star selected={true} title={"Star"}/>
                <Star selected={true} title={"Star"}/>
                <Star selected={true} title={"Star"}/>
            </div>
        )
    } else {
        return (
            <div>
                <Star selected={false} title={"Star"}/>
                <Star selected={false} title={"Star"}/>
                <Star selected={false} title={"Star"}/>
                <Star selected={false} title={"Star"}/>
                <Star selected={false} title={"Star"}/>
            </div>
        )
    }
}