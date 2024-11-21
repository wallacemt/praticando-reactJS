import {useState, useEffect} from 'react';

// 2. Alteração de Cor de Fundo: Crie um componente onde o fundo da página muda de cor cada vez que o usuário clica em um botão.
// Use useState para armazenar a cor atual e useEffect para atualizar o estilo do fundo com cada mudança. Desafio: gere cores aleatórias sempre que o botão for clicado.

export const  AlteraCorDoFundo = () => {
    const [isClicked, setIsclicked] = useState(true);

    useEffect(() => {
        const alterar = document.querySelector('.alterar');
        if (isClicked) {
            const corAleatoria = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            alterar.style.backgroundColor = corAleatoria();
        }
    }, [isClicked]);

    return (
        <div className='flex justify-center align-center alterar h-full w-full transition ease-in-out'>
            <button onClick={() => setIsclicked(!isClicked)} className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded h-10 mt-10'>Clique aqui Para Mudar a Cor</button>
        </div>
    )
}