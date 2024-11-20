import { useState } from "react";


// 1. Contador Simples: Crie um componente de contador que exibe um número na tela e possui dois botões: “Incrementar” e “Decrementar”. Use o hook useState para manter o valor do contador. Desafio: adicione uma condição para não permitir que o valor seja menor que zero.

function Contador() {
    const [contador, setContador] = useState(0);
    const handleIncrement = () => {
        setContador(contador + 1);
    }
    const handleDecrement = () => {
        if(contador != 0 ){
            setContador(contador - 1);
        }
    }
    return (
        <>
            <h1 className="text-3xl text-center">Contador: {contador}</h1>
            <div className="flex justify-center mb-10">
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded mr-10 mt-10" onClick={handleIncrement}>Incrementar</button>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded mt-10" onClick={handleDecrement}>Decrementar</button>
            </div>
        </>
    )
}

export default Contador
