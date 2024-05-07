import React from 'react';
import {Select} from './Select';
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select
};

export const WithValue = () => {
    const [value, setValue] = React.useState(2);

    return (
        <>
            <Select  value={value} onChange={setValue}
                    items={
                        [
                            {value: 1, title: 'Minsk'},
                            {value: 2, title: 'Moskovitz'},
                            {value: 3, title: 'Kiev'},
                        ]
                    }
            />
        </>
    )
}
export const WithoutValue = () => {
    const [value, setValue] = React.useState(null);
    return (
        <>
            <Select value={value}
                    onChange={setValue}
                    items={
                        [
                            {value: 1, title: 'Minsk'},
                            {value: 2, title: 'Moskovitz'},
                            {value: 3, title: 'Kiev'},
                        ]
                    }
            />
        </>
    )
}