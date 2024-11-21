import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TabSystem } from "./components/TabSystem";
import {Contador} from './components/Contador';
import { AlteraCorDoFundo } from "./components/AlteraCorDeFundo";
import { Temporizador } from "./components/Temporizador";
import { FiltrarLista } from "./components/FiltroDeLista";
import { FormularioSimples } from "./components/FormularioSimples";
import { RequisicaoSimples } from "./components/RequisiçãoSimples";
import { GaleriaDeImagens } from "./components/GaleriaDeImagens";
import { TodoList } from "./components/ListaDeTarefas";
import { Timer } from "./components/Timer";

import { FaClock, FaPaintBrush, FaListUl, FaRegAddressCard, FaImages, FaSyncAlt, FaFilm, FaSlidersH, FaTabletAlt, FaListAlt } from "react-icons/fa";

const RoutesApp = () => {
  const tabs = [
    { id: 0, title: "Contador Simples", component: <Contador />, icon: <FaClock /> },
    { id: 1, title: "Alteração de Cor de Fundo", component: <AlteraCorDoFundo/>, icon: <FaPaintBrush /> },
    { id: 2, title: "Temporizador com useEffect", component: <Temporizador/>, icon: <FaSyncAlt /> },
    { id: 3, title: "Filtro de Lista", component: <FiltrarLista/>, icon: <FaListUl /> },
    { id: 4, title: "Formulário de Registro Simples", component: <FormularioSimples/>, icon: <FaRegAddressCard /> },
    { id: 5,title: "Aplicação de Requisição Simples", component: <RequisicaoSimples/>, icon: <FaSlidersH /> },
    { id: 6, title: "Galeria com Visualização Detalhada", component: <GaleriaDeImagens/>, icon: <FaImages /> },
    { id: 7, title: "Timer com Intervalo e Alerta", component: <Timer/>, icon: <FaClock /> },
    { id: 8, title: "Lista de Tarefas", component: <TodoList/>, icon: <FaListAlt /> },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TabSystem tabs={tabs} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
