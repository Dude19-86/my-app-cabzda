import React, {useState} from 'react';

type OnOffType = {
    // on: boolean
    // onClick: () => void
}

export const OnOff = (props: OnOffType) => {

    const [state, setState] = useState(false)

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


    return (
        <div style={generalStyle}>
            <div  onClick={() => { setState(true)}} style={onStyle}>On</div>
            <div  onClick={() => { setState(false)}} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};