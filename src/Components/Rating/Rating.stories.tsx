import React from 'react';
import {Rating, RatingValueType} from "./Rating";

export default {
    title: 'Rating stories',
    component: Rating
};

export const EmptyRating = () => {
    return (
        <Rating value={0} onClick={x => x}/>
    )
}
export const Rating1 = () => {
    return (
        <Rating value={1} onClick={x => x}/>
    )
}
export const Rating2 = () => {
    return (
        <Rating value={2} onClick={x => x}/>
    )
}
export const Rating3 = () => {
    return (
        <Rating value={3} onClick={x => x}/>
    )
}
export const Rating4 = () => {
    return (
        <Rating value={4} onClick={x => x}/>
    )
}
export const Rating5 = () => {
    return (
        <Rating value={5} onClick={x => x}/>
    )
}
export const RatingChanging = () => {
    const [value, setValue] = React.useState<RatingValueType>(5);
    return (
        <Rating value={value} onClick={setValue}/>
    )
}

