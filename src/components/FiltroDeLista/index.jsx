import {useState} from 'react'

// 5. Filtro de Lista: Crie um componente que renderiza uma lista de nomes. Adicione um campo de entrada para filtrar os nomes com base no texto digitado. Use useState para controlar o valor do filtro e map para exibir apenas os itens que correspondem ao filtro. Desafio: ignore maiúsculas e minúsculas ao filtrar.

export const FiltrarLista = () => {
    const [filter, setFilter] = useState('');

    const names = ["Ana", "João", "Maria", "Pedro", "Jorge", "Leticia", "Felipe", "Sofia", "Guilherme", "Luiza", "Wallace"];

    const filteredNames = names.filter(name => name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <div className="flex flex-col border-2 border-gray-800 rounded-md p-4">
            <input 
                type="text" 
                value={filter} 
                onChange={e => setFilter(e.target.value)} 
                placeholder="Filtrar..." 
                className="bg-gray-700 p-2 rounded-md"
            />
            <ul className="mt-4 flex flex-col items-center w-full text-center">
                {filteredNames.map(name => <li key={name} className="py-2 w-full hover:bg-blue-800 text-white cursor-pointer">{name}</li>)}
            </ul>
        </div>
    )
}
