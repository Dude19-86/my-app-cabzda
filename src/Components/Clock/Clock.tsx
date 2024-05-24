import React from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";


interface ClockProps {
    mode?: 'digital' | 'analog'
}

export const formatDate = (date: Date) => {
    const addZero = (num: number) => {
        return num < 10 ? "0" + num : num
    }
    return `${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`
}

export const Clock: React.FC<ClockProps> = ({mode}: ClockProps) => {
    const [date, setDate] = React.useState(new Date())

    React.useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])


    // const hourAngle = (date.getHours() % 12) * 30; // 30 degrees per hour
    // const minuteAngle = date.getMinutes() * 6; // 6 degrees per minute
    // const secondAngle = date.getSeconds() * 6; // 6 degrees per second


    const view = mode === "analog" ? <AnalogClockView date={date} formatDate={formatDate}/> :
        <DigitalClockView date={date} formatDate={formatDate}/>

    return (
        <>
            {view}
        </>
    );
};


