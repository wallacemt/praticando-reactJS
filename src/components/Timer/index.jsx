import { useState, useEffect } from "react";
import TimerSong from '../../assets/timer.mp3'

const audio = new Audio(TimerSong);

// 9. Timer com Intervalo e Alerta: Crie um timer onde o usuário define a quantidade de segundos para a contagem regressiva e, ao iniciar, o tempo é exibido e diminui a cada segundo. Use useState para armazenar o tempo e useEffect para iniciar a contagem regressiva ao iniciar o timer. Ao chegar a zero, exiba um alerta informando que o tempo acabou. Desafio: Adicione botões para pausar e reiniciar o timer.

export const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (isRunning && seconds > 0) {
            const interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
        if (seconds === 0 && isRunning) {
            audio.play();
            alert('Timer Finalizado!');
        }
    }, [seconds, isRunning]);

    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-4xl">{seconds}</h1>
            <input className="bg-gray-700 m-5 p-3" type="number" value={seconds} onChange={(e) => setSeconds(e.target.value)} placeholder="Seconds" />
            <div className="flex justify-center mb-10 buttons">
                <button className="bg-green-800 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded mr-10" onClick={() => setIsRunning(true)}>Start</button>
                <button className="bg-red-900 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-10" onClick={() => setIsRunning(!isRunning)}>{isRunning ? 'Pausar' : 'Contiunar'}</button>
                <button className="bg-red-800 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded mr-10" onClick={() => setSeconds(0)}>Reset</button>
            </div>
            <div className="flex flex-col justify-center gap-5">
                <button onClick={() => {setSeconds(60),  setIsRunning(true)}} className="bg-gray-700 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded mr-10">1min</button>
                <button onClick={() => {setSeconds(300), setIsRunning(true)}} className="bg-gray-700 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded mr-10" >5min</button>
                <button onClick={() => {setSeconds(600), setIsRunning(true)}} className="bg-gray-700 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded mr-10">10min</button>
                <button onClick={() => {setSeconds(1200), setIsRunning(true)}} className="bg-gray-700 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded mr-10">20min</button>
                <button onClick={() => {setSeconds(1800), setIsRunning(true)}} className="bg-gray-700 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded mr-10">30min</button>
            </div>
        </div>
    )
}


