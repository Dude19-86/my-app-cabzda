import {Accordion} from './Accordion';
import React, {useState} from "react";
import {action} from '@storybook/addon-actions';

export default {
    component: Accordion,
}

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')


export const MenuCollapsedMode = () => {
    return (
        <Accordion
            titleValue={'MenuCollapsedMode'}
            collapsed={true}
            onChange={callback}
            items={[]}
            onClick={onClickCallback}/>
    )
}

export const UserUnCollapsedMode = () => {
    return (
        <Accordion
            titleValue={"UserUnCollapsedMode"}
            collapsed={false}
            onChange={callback}
            items={[{title: 'Dimon', value: 1}, {title: 'Vasya', value: 2}, {title: 'Petya', value: 3}, {
                title: 'Sasha',
                value: 4
            }, {title: 'Kolya', value: 5}, {title: 'Katya', value: 6}, {title: 'Dima', value: 7}, {
                title: 'Dasha',
                value: 8
            }, {title: 'Kosta', value: 9}]}
            onClick={onClickCallback}/>
    )
}

export const ModeChanging = () => {
    const [value, setValue] = useState(true)
    return (
        <Accordion
            titleValue={"Users"}
            collapsed={value}
            onChange={() => {
                setValue(!value)
            }}
            items={
                [
                    {title: 'Dimon', value: 1},
                    {title: 'Vasya', value: 2},
                    {title: 'Petya', value: 3},
                    {title: 'Sasha', value: 4},
                    {title: 'Kolya', value: 5},
                    {title: 'Katya', value: 6},
                    {title: 'Dima', value: 7},
                    {title: 'Dasha', value: 8},
                    {title: 'Kosta', value: 9},
                    {title: 'Jack', value: 10},
                    {title: 'Jill', value: 11},
                    {title: 'Jim', value: 12},
                    {title: 'Joe', value: 13},
                    {title: 'Juan', value: 14},
                    {title: 'Harry', value: 15},
                    {title: 'Peter', value: 16},
                    {title: 'James', value: 17},







                ]
            }
            onClick={onClickCallback}/>
    )
}