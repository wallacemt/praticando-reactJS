import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TabSystem from "./components/TabSystem";
import Contador from './components/Contador'

const RoutesApp = () => {
  const tabs = [
    { title: "Contador Simples", component: <Contador/> },
    { title: "Alteração de Cor de Fundo", component: "" },
    { title: "Temporizador com useEffect", component: "" },
    { title: "Filtro de Lista", component:"" },
    { title: "Formulário de Registro Simples", component: ""},
    { title: "Aplicação de Requisição Simples", component: ""},
    { title: "Galeria com Visualização Detalhada", component: ""},
    { title: "Timer com Intervalo e Alerta", component: ""},
    { title: "Componentes com Tabs Navegáveis", component: ""}
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
