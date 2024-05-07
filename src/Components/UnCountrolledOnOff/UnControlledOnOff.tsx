import React, {useState} from 'react';

type OnOffType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}

export const UnControlledOnOff = (props: OnOffType) => {

    const [state, setState] = useState(props.defaultOn ? props.defaultOn : false)

    const generalStyle = {
        display: 'flex', alignItems: 'center', gap: '10px',
        padding: '5px'
    }

    const onStyle = {
        display: 'inline-block',
        backgroundColor: state ? 'green' : 'white',
        width: '100px',
        height: '70px',
        textShadow: '0 0 2px blue'
    }

    const offStyle = {
        display: 'inline-block',
        backgroundColor: !state ? 'red' : 'white',
        width: '100px',
        height: '70px',
        textShadow: '0 0 2px blue'
    }

    const indicatorStyle = {
        display: 'inline-block',
        height: "20px",
        width: '20px',
        borderRadius: "50%",
        backgroundColor: state ? 'green' : 'red',
        border: '2px solid black'
    }


    const onClicked = () => {
        setState(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setState(false)
        props.onChange(false)
    }

    return (
        <div style={generalStyle}>
            <div  onClick={onClicked} style={onStyle} >On</div>
            <div  onClick={offClicked} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};