import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import {UnControlledRating} from './Components/UnControlledRating/UnControlledRating';
import {Accordion} from "./Components/Accordion/Accordion";
import {UnControlledOnOff} from "./Components/UnCountrolledOnOff/UnControlledOnOff";
import { OnOff } from './Components/onOff/OnOff';
import {Select} from "./Components/Select/Select";
const App = () => {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div>
            {/*<Select value={1} onClick={() => {}} items={[]}/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UnControlledRating onChange={()=> {}}/>
            <Accordion
                titleValue={'Menu'}
                onChange={setAccordionCollapsed}
                collapsed={accordionCollapsed}
             items={[]} onClick={()=> {}}/>
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <UnControlledOnOff onChange={setSwitchOn}/>{switchOn.toString()}
        </div>
    );
}

export default App;













