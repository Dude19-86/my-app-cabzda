import React from "react";
import {action} from '@storybook/addon-actions';
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
}

const callback = action('UncontrolledAccordion mode change event fired')


export const MenuCollapsedMode = () => {
    return (
        <UncontrolledAccordion onClick={() => {}} items={[]}
            titleValue={'Users'}
         collapsed={true} onChange={() => {}}/>
    )
}



