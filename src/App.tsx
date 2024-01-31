import React, {useState} from 'react';
import './App.css';
import {Rating} from "./Components/Rating/Rating";
import {Accordion} from "./Components/Accordion/Accordion";
import {PageTitle} from "./Components/AppTitle/PageTitle";
import Input from "./Components/Input/Input";

const App = () => {
    const [state, SetState] = useState(true)
   return (
        <div>
            <Input type={"text"}/>
            <Input type={"date"}/>

            <PageTitle title={"This is it Component"}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Accordion collapsed={true} titleValue={"Menu"}/>
            <Accordion collapsed={false} titleValue={"Users"}/>
            <Accordion collapsed={false} titleValue={"Cuisine"}/>
        </div>
    );
}

export default App;


// export type RatingProps = {
//     color?: string | "black"
//     colorBgc?: string | "white"
//     title?: string
//     number?: number
//     selected?: boolean
//     value?: number
// }













