import React from 'react';
type InputPropsType = {
    type: string
}
const Input = (props: InputPropsType) => {
    return (
        <div>
            <input type={props.type}/>
        </div>
    );
};

export default Input;