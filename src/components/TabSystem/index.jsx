import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; 

// 10. Componentes com Tabs Navegáveis: Crie uma interface de “tabs” (abas) onde cada aba exibe um conteúdo diferente ao ser clicada (por exemplo, uma aba “Sobre” e uma aba “Contato”). Use useState para controlar qual aba está ativa e renderize o conteúdo de acordo com a aba selecionada. Desafio: Adicione um efeito visual que destaque a aba ativa.

export const TabSystem = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(()=> {
        const currentTab = localStorage.getItem("currentTab");
        if (currentTab) {
            return parseInt(currentTab, 10);
        }
        return 0;
    });
    const [isMenuOpen, setIsMenuOpen] = useState(true);  
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleOutsideClick = (event) => {
        if (isMenuOpen && !event.target.closest(".menu")) {
            setIsMenuOpen(false);
        }
    };
    useEffect(() => {
        const currentTab = localStorage.getItem("currentTab");
        if (currentTab) {
            const tabIndex = tabs.findIndex((tab) => tab.id === parseInt(currentTab, 10));
            if (tabIndex !== -1) {
                setActiveTab(tabIndex);
            } else {
                setActiveTab(0);
            }
        }
    }, [tabs]);
    useEffect(() => {
        if (tabs[activeTab]) {
            localStorage.setItem("currentTab", tabs[activeTab].id.toString());
        }
    }, [activeTab, tabs]);

    return (
        <div className="flex flex-col h-screen bg-gray-900 text-white" onClick={handleOutsideClick}>
            <div className={`flex flex-col w-74 bg-gray-800 p-4 fixed left-0 top-0 bottom-0 z-10 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold">Navegação</div>
                    <button onClick={toggleMenu}>
                        <FaTimes size={30} />
                    </button>
                </div>

                <div className="flex flex-col mt-4">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)} 
                            className={`px-4 py-3 text-left rounded-lg mb-2 transition duration-300 ease-in-out flex items-center ${
                                activeTab === index
                                    ? "bg-gray-900 text-blue-400"
                                    : "bg-gray-700 hover:bg-gray-600"
                            }`}
                        >
                            <span className="mr-2">{tab.icon}</span>
                            {tab.title}
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex justify-between p-4">
                <button onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                </button>
            </div>
            <div className="text-2xl text-green-500 font-bold fixed top-5 left-1/2 transform -translate-x-1/2">{tabs[activeTab]?.title}</div>

            <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-3/4 lg:w-1/2 h-3/4 bg-blue-900 rounded-lg shadow-lg overflow-x-auto p-4 transition duration-300 ease-in-ou ${isMenuOpen ? 'blur-sm': ""}`}>
                <div
                    className={`w-full h-full ${tabs[activeTab]?.component ? "" : "bg-gray-800"}`}
                >
                    {tabs[activeTab]?.component}
                </div>
            </div>
        </div>
    );
};
