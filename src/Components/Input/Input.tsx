import React from 'react';
type InputPropsType = {
    type: string
}
export const Input = (props: InputPropsType) => {
    return (
        <div>
            <input type={props.type}/>
        </div>
    );
};