import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import {UnControlledRating} from './Components/UnControlledRating/UnControlledRating';
import {Accordion} from "./Components/Accordion/Accordion";
import {UnControlledOnOff} from "./Components/UnCountrolledOnOff/UnControlledOnOff";
import {OnOff} from './Components/onOff/OnOff';
import {UncontrolledAccordion} from "./Components/Accordion/UncontrolledAccordion";
import {Clock} from "./Components/Clock/Clock";

const App = () => {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div>
            {/*<UncontrolledAccordion titleValue={'Menu'}*/}
            {/*                       collapsed={accordionCollapsed}*/}
            {/*                       onChange={() => {}}*/}
            {/*                       items={[{title: '1', value: 1}, {title: '2', value: 2}, {title: '3', value: 3}]}*/}
            {/*                       onClick={() => {}}/>*/}
            {/*/!*<Select value={1} onClick={() => {}} items={[]}/>*!/*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<UnControlledRating onChange={() => {*/}
            {/*}}/>*/}
            {/*<Accordion*/}
            {/*    titleValue={'Menu'}*/}
            {/*    onChange={setAccordionCollapsed}*/}
            {/*    collapsed={accordionCollapsed}*/}
            {/*    items={[]} onClick={() => {*/}
            {/*}}/>*/}
            {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}
            {/*<UnControlledOnOff onChange={setSwitchOn}/>{switchOn.toString()}*/}
            <Clock mode="digital"/>
            <br/>
            <hr/>
            <Clock mode="analog"/>
        </div>
    );
}

export default App;













