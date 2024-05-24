import {useEffect, useState} from "react";

export default {
    title: "useEffect demo",
}


// export const SimpleExample = () => {
//     console.log("SimpleExample")
//     const [fake, setFake] = useState(0);
//     const [counter, setCounter] = useState(0);
//
//     useEffect(() => {
//         console.log('useEffect every render');
//         document.title = counter.toString();
//     });
//
//     useEffect(() => {
//         console.log('useEffect only first render (componentDidMount)');
//         document.title = counter.toString();
//     }, []);
//
//     useEffect(() => {
//         console.log('useEffect every render and every counter change');
//         document.title = counter.toString();
//     }, [counter]);
//
//     return (
//         <div>
//            Hello, {counter} {fake}
//             <button onClick={() => setCounter(counter + 1)}>counter</button>
//             <button onClick={() => setFake(fake + 1)}>fake</button>
//         </div>
//     );
// };
export const SetIntervalExample = () => {
    console.log("SetTimeoutExample")
    const [fake, setFake] = useState(0);
    const [counter, setCounter] = useState(0);
    const [date, setDate] = useState(new Date());

    // useEffect(() => {
    //     console.log('useEffect every render');
    //     document.title = counter.toString();
    // });
    //
    // useEffect(() => {
    //     console.log('useEffect only first render (componentDidMount)');
    //     document.title = counter.toString();
    // }, []);
    //
    // useEffect(() => {
    //     console.log('useEffect every render and every counter change');
    //     document.title = counter.toString();
    // }, [counter]);

    // setTimeout(() => {
    //     console.log('setTimeout');
    //     document.title = counter.toString();
    // }, 1000);

    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log('setTimeout');
    //         document.title = counter.toString();
    //     }, 1000);
    // }, []);


    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <h1>{date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:{date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}:{date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()}</h1>
            {/*<button onClick={() => setCounter(counter + 1)}>counter</button>*/}
            {/*<button onClick={() => setFake(fake + 1)}>fake</button>*/}
        </div>
    );
};

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1);
    console.log('Component rendered');
    useEffect(() => {
        console.log('Effect occurred ' + counter);
        return () => {
            console.log('Reset effect occurred ' + counter);
        }
    }, [counter]);

    const increase = () => setCounter(counter + 1);

    return (
        <div>
            Hello: {counter + ' '}
            <button onClick={increase}>+</button>
        </div>
    );
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('');
    console.log('Component rendered ' + text);
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text +  e.key)
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text]);


    return (
        <div>
            Typed: {text}
        </div>
    );
}


export const SetTimeoutExample2 = () => {
    console.log("SetTimeoutExample")
    const [text, setText] = useState('');

    useEffect(() => {
        const timerId = setTimeout(() => {
            console.log('timeout expired')
            setText('3 seconds passed')
        }, 3000);

        return () => {
            clearTimeout(timerId);
        }
    }, [text]);

    return (
        <div>
            Typed Text:  {text}
        </div>
    );
}