import { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaCheckSquare } from "react-icons/fa";

// 3. Lista de Tarefas: Crie um aplicativo de lista de tarefas (to-do list) onde o usuário pode adicionar e remover tarefas. Use useState para armazenar a lista de tarefas e renderize cada tarefa como um item de lista. Desafio: permita que o usuário marque as tarefas como concluídas e filtre para ver apenas as tarefas pendentes.

export const TodoList = () => {
    const [toDo, setToDo] = useState([]);
    const [value, setValue] = useState("");
    const [isEditing, setIsEditing] = useState(-1);

    document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            handleToDo();
        }
    });
    useEffect(() => {
        const data = localStorage.getItem("todo");
        if (data) {
            setToDo(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        if(toDo.length !== 0){
            localStorage.setItem("todo", JSON.stringify(toDo));
        }
    }, [toDo]);

    const handleToDo = () => {
        if (value.trim() !== "") {
            setToDo([...toDo, { name: value, completed: false }]);
            setValue("");
        }
    }
    const handleEdit = (index) => {
        setIsEditing(index);
        setValue(toDo[index].name);
    }
    const handleSave = (index) => {
        const newToDo = [...toDo];
        newToDo[index].name = value;
        setToDo(newToDo);
        setIsEditing(-1);
        setValue("");
    }
    const handleCompleted = (index) => {
        const newToDo = [...toDo];
        newToDo[index].completed = !newToDo[index].completed;
        setToDo(newToDo);
    }
    const handleRemove = (index) => {
        setToDo(toDo.filter((_, i) => i !== index));
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-4xl">Lista de Tarefas</h1>
            <input className="bg-gray-700 m-5 p-3" type="text" placeholder="Adicionar uma tarefa" value={value} onChange={(e) => setValue(e.target.value)}/>
            <button className="bg-green-800 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded" onClick={handleToDo}>Adicionar a Tarefa</button>
            <ul className="m-5 p-3">
                {toDo.map((item, index) => (
                    <li key={index} className={`bg-gray-700 m-5 p-3 w-full items-center gap-3 rounded ${item.completed ? 'line-through': ''}`}>
                        {isEditing === index ? (
                            <input className="bg-gray-700 m-5 p-3" type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
                        ) : (
                            <span>{item.name}</span>
                        )}
                        <button className="bg-red-800 hover:bg-blue-400 text-white font-bold ml-5 py-2 px-2 rounded" onClick={() => handleRemove(index)}><FaTrash /></button>
                        <button className="bg-green-800 hover:bg-blue-400 text-white font-bold ml-5 py-2 px-2 rounded" onClick={() => handleCompleted(index)}><FaCheckSquare /></button>
                        <button className="bg-green-800 hover:bg-blue-400 text-white font-bold ml-5 py-2 px-2 rounded" onClick={() => handleEdit(index)}><FaEdit /></button>
                        {isEditing === index && <button className="bg-green-800 hover:bg-blue-400 text-white font-bold ml-5 py-2 px-2 rounded" onClick={() => handleSave(index)}>Salvar</button>}
                    </li>
                ))}
            </ul>
        </div>
    );
}

