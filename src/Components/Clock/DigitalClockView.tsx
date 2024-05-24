import React from "react";

export type DigitalClockViewType = {
    formatDate: (date: Date) => string
    date: Date
}
export const DigitalClockView: React.FC<DigitalClockViewType> = ({formatDate, date}) => {
    return (
        <div>
            <div style={{
                border: "1px solid black",
                padding: "10px",
                width: "100px",
                textAlign: "center",
                color: "red",
                fontSize: "30px",
                borderRadius: "10px",
            }}>
                <span>{formatDate(date)}<br/></span>
            </div>
        </div>
    )
}