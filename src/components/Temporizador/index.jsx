import { useState, useEffect } from 'react';

// 4. Temporizador com useEffect: Crie um temporizador que conta o tempo em segundos e exiba na tela. Use useEffect para iniciar o temporizador ao carregar o componente e useState para atualizar o tempo. Desafio: adicione botões para pausar e reiniciar o temporizador.

export const Temporizador = () => {
    const [segundos, setSegundos] = useState(0);
    const [isStop, setIsStop] = useState(false)

    useEffect(() => {
        if(!isStop){
            const timer = setInterval(() => setSegundos(segundos + 1), 1000);
            return () => clearInterval(timer);
        }
    }, [segundos, isStop])

    const handleStop = () => {
        setIsStop(!isStop);
    }
    const handleReset = () => {
        setSegundos(0);
        setIsStop(false);
    }
    return(
        <div className='flex flex-col items-center'>
            <span className='font-bold text-center mb-4 text-[3em]'>Segundos: {segundos} {!isStop ? "": "(STOP)"}</span>
            <button className='bg-blue-600 text-white hover:bg-blue-700 p-5 mb-4' onClick={handleStop}>{ !isStop ? "Pausar Temporizador": "Retomar Temporizador"}</button>
            <button className='bg-red-600 text-white hover:bg-red-700 p-5' onClick={handleReset}>Reiniciar Temporizador</button>
        </div>
    )
}
