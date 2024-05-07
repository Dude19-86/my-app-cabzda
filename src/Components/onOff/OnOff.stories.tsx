import {OnOff} from "./OnOff";
import React from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff stories',
    component: OnOff,
};

const callback = action('on or off clicked')

export const OnMode = () => {
    return (
        <OnOff onChange={callback} on={true}/>
    );
};
export const OffMode = () => {
    return (
        <OnOff onChange={callback} on={false}/>
    );
};
export const OnOffMode = () => {
    const [on, setOn] = React.useState(true);
    return (
        <OnOff onChange={setOn} on={on}/>
    );
};


