import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";
import {OnOff} from "./Components/onOff/OnOff";


const App = () => {
    return (
        <div>
            <Accordion titleValue={"Menu"}/>
            <Accordion titleValue={"Users"}/>
            <Accordion titleValue={"Cuisine"}/>

            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            <Rating/>
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <OnOff/>
            <OnOff/>
            <OnOff/>
        </div>
    );
}

export default App;


// export type RatingProps = {
//     on?: string | "black"
//     colorBgc?: string | "white"
//     title?: string
//     number?: number
//     selected?: boolean
//     value?: number
// }













