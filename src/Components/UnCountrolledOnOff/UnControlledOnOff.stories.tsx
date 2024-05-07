import React from "react";
import {action} from "@storybook/addon-actions";
import {UnControlledOnOff} from "./UnControlledOnOff";

export default {
    title: 'UnControlledOnOff',
    component: UnControlledOnOff,
};

const callback = action('on or off clicked')

export const OnMode = () => {
    return (
        <UnControlledOnOff defaultOn={true} onChange={callback}/>
    );
};
export const OffMode = () => {
    return (
        <UnControlledOnOff defaultOn={false} onChange={callback}/>
    );
};
export const BugMode = () => {
    return (
        <div>Unsync when change defaultValue when already rendered</div>
    );
};


