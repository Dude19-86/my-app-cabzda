import React from 'react';
import {UnControlledRating} from "./UnControlledRating";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UnControlledRating',
    component: UnControlledRating,
};

const callback = action('rating changed inside component')
export const EmptyRating = () => {
    return (
        <UnControlledRating defaultValue={0} onChange={callback}/>
    )
}
export const Rating1 = () => {
    return (
        <UnControlledRating defaultValue={1} onChange={callback}/>
    )
}
export const Rating2 = () => {
    return (
        <UnControlledRating defaultValue={2} onChange={callback}/>
    )
}
export const Rating3 = () => {
    return (
        <UnControlledRating defaultValue={3} onChange={callback}/>
    )
}
export const Rating4 = () => {
    return (
        <UnControlledRating defaultValue={4} onChange={callback}/>
    )
}
export const Rating5 = () => {
    return (
        <UnControlledRating defaultValue={5} onChange={callback}/>
    )
}

