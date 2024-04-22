import React, {useState} from 'react';
import './App.css';
import {Rating, RatingPropsType, RatingValueType} from "./Components/Rating/Rating";
import {UncontrolledRating} from './Components/UncontrolledRating';
import {Accordion} from "./Components/Accordion/Accordion";
import {OnOff} from './Components/onOff/OnOff';
import {UnControlledOnOff} from "./Components/UnCountrolledOnOff/UnControlledOnOff";


const App = () => {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>
            <Accordion
                titleValue={'Menu'}
                onChange={setAccordionCollapsed}
                collapsed={accordionCollapsed}
            />
            {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}
            <UnControlledOnOff onChange={setSwitchOn}/>{switchOn.toString()}
        </div>
    );
}

export default App;













