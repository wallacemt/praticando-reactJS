import { useState } from "react";
// 6. Formulário de Registro Simples: Crie um formulário com campos de nome, e-mail e senha. Ao enviar o formulário, exiba uma mensagem de boas-vindas usando as informações digitadas. Use useState para armazenar os valores dos campos e exiba a mensagem em um novo componente de boas-vindas. Desafio: adicione validações para garantir que todos os campos estejam preenchidos antes de enviar.

export const FormularioSimples = () => {
    const [values, setValues] = useState({
        nome: '',
        email: '',
        senha: '',
    })

    const handleInputChange = (e) => {
        e.preventDefault();
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const {nome, email, senha} = values;
        if(!nome.trim() || !email.trim() || !senha.trim()){
            alert('Preencha todos os campos');
            return;
        }
        alert(`Bem-vindo ${nome}!`);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center bg-gray-800 p-10 rounded-md shadow-md">
            <div className="flex flex-col w-full">
                <label htmlFor="nome" className="text-white text-lg font-bold">Nome: </label>
                <input type="text" name="nome" value={values.nome} onChange={handleInputChange} className="bg-gray-900 text-white p-2 rounded-md w-full"/>
            </div>
            <div className="flex flex-col w-full mt-5">
                <label htmlFor="email" className="text-white text-lg font-bold">E-mail: </label>
                <input type="email" name="email" value={values.email} onChange={handleInputChange} className="bg-gray-900 text-white p-2 rounded-md w-full"/>
            </div>
            <div className="flex flex-col w-full mt-5">
                <label htmlFor="senha" className="text-white text-lg font-bold">Senha: </label>
                <input type="password" name="senha" value={values.senha} onChange={handleInputChange} className="bg-gray-900 text-white p-2 rounded-md w-full"/>
            </div>
            <button type="submit" className="bg-green-700 p-2 rounded-md w-full mt-5">Enviar</button>
        </form>
    )
}

