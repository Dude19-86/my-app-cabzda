import React, {useState} from "react";

type StarPropsType = {
    selected: boolean
    title?: string
    color?: string
}
export const Star = (props: StarPropsType) => {

    // const [state, setState] = useState(false)

    return (
        // <div onClick={() => {setState(!state)}} style={{display: 'inline-block', margin: '2px'}}>
        //     {state ? <span style={{color: 'blue'}}><b>{props.title}</b> </span> :
        //         <><span style={{color: 'green'}}>Flash</span></>}
        // </div>

        <>
            {props.selected ? <span><b>Star</b> </span> :
                <span>Star</span>}
        </>
    )
}