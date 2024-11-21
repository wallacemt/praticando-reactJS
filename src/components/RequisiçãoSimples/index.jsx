import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CircularProgress from '@mui/material/CircularProgress';

// 7. Aplicação de Requisição de Dados Simples: Crie um componente que exiba uma lista de posts obtidos de uma API pública (como JSONPlaceholder). Use useEffect para fazer a requisição ao carregar o componente e exiba os posts em uma lista. Desafio: adicione um botão para recarregar os dados e um indicador de carregamento enquanto a requisição está sendo feita.

export const RequisicaoSimples = () => {
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await res.json();
                setResponse(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [])

    return (
        <div>
            {loading ? (
                <div className="flex justify-center">
                    <CircularProgress />
                </div>
            ) : (
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ color: '#fff111', fontSize: '20px' }}>Id</TableCell>
                                <TableCell style={{ color: '#fff111', fontSize: '20px' }}>Nome</TableCell>
                                <TableCell style={{ color: '#fff111', fontSize: '20px' }}>E-mail</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {response.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell style={{ color: 'white' }}>{row.id}</TableCell>
                                    <TableCell style={{ color: 'white' }}>{row.name}</TableCell>
                                    <TableCell style={{ color: 'white' }}>{row.email}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </div>
    )
}

