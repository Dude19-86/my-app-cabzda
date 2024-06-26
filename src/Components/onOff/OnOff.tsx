import React, {useState} from 'react';

type OnOffType = {
    on: boolean
    onChange: (on: boolean) => void
}

export const OnOff = (props: OnOffType) => {
    console.log('on: ' + props.on)

    const generalStyle = {
        display: 'flex', alignItems: 'center', gap: '10px',
        padding: '5px'
    }

    const onStyle = {
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'white',
        width: '100px',
        height: '70px',
        textShadow: '0 0 2px blue'
    }

    const offStyle = {
        display: 'inline-block',
        backgroundColor: !props.on ? 'red' : 'white',
        width: '100px',
        height: '70px',
        textShadow: '0 0 2px blue'
    }

    const indicatorStyle = {
        display: 'inline-block',
        height: "20px",
        width: '20px',
        borderRadius: "50%",
        backgroundColor: props.on ? 'green' : 'red',
        border: '2px solid black'
    }


    return (
        <div style={generalStyle}>
            <div  onClick={() => { props.onChange(true)}} style={onStyle}>On</div>
            <div  onClick={() => { props.onChange(false)}} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};