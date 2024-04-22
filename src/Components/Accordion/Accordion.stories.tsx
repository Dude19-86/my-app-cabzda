import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import { Accordion } from './Accordion';
import React, {useState} from "react";

 const meta: Meta<typeof Accordion> = {
    component: Accordion,
};
 export default meta;

type Story = StoryObj<typeof Accordion>;
export const FirstStory: Story = {
    args: {
        titleValue: 'Hello',
        collapsed: true
    }

}

const onChangeCallBack = action('onChange')

//     export const CollapsedAccordion = () => {
//     return (
//         // <Accordion
//         //     titleValue={"Menu"}
//         //     onChange={onChangeCallBack}
//         //     collapsed={true}
//         // />
//     )
// }

// export const OpenAccordion= () => {
//     return (
//         <Accordion
//             titleValue={"Menu"}
//             onChange={() => {}}
//             collapsed={true}
//         />
//     )
// }

// export const MainAccordion= () => {
//     const [state, setState] = useState(false)
//     return (
//         <Accordion
//             titleValue={"Menu"}
//             onChange={() => {}}
//             collapsed={true}
//         />
//     )
// }