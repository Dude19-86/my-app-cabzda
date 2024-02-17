
import {Star} from "./Star";
import {Button} from "antd";
import {useState} from "react";

type RatingProps = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
    // state: 0 | 1 | 2 | 3 | 4 | 5
    // setState: (n : 0 | 1 | 2 | 3 | 4 | 5) => void
}
export const Rating = (props: RatingProps) => {

    const [state, setState] = useState(0)


    return (
        <div>
            <Button onClick={() => {setState(0)}} type={'primary'}>0</Button>
            <Star selected={state > 0} /><Button onClick={() => {setState(1)}} type={'primary'}>1</Button>
            <Star selected={state > 1} /><Button onClick={() => {setState(2)}} type={'primary'}>2</Button>
            <Star selected={state > 2} /><Button onClick={() => {setState(3)}} type={'primary'}>3</Button>
            <Star selected={state > 3} /><Button onClick={() => {setState(4)}} type={'primary'}>4</Button>
            <Star selected={state > 4} /><Button onClick={() => {setState(5)}} type={'primary'}>5</Button>
        </div>
    )
}