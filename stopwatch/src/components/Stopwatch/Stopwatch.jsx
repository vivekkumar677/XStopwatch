import React, { useEffect, useState } from "react";
import './Stopwatch.css';

const Stopwatch = () => {

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval = null;

        if(isRunning) {
            interval = setInterval(() => {
                setTime((preTime) => preTime + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    };

    const formatedTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }

    return (
        <div>
            <h1>Stopwatch</h1>
            <p>Time: {formatedTime(time)}</p>
            { isRunning ? (
                <button onClick={handleStop}>Stop</button>
            ) : (
                <button onClick={handleStart}>Start</button>
            )}
            <button onClick={handleReset}>Reset</button>
        </div>
    )
};

export default Stopwatch;