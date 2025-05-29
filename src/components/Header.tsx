import { useState } from "react";
import { Link } from "react-router-dom";

import menuImg from "../assets/icones/menu.png";
import logoImg from "../assets/logo-blue.png";
import closeImg from "../assets/icones/close-button.png";

export default function Header() {
    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <>  
            <header className="w-full z-20 fixed bg-white lg:static border-b border-gray-200 lg:border-0">
                <div className="w-full lg:h-32 h-20 lg:p-9 lg:px-16 px-6 flex items-center justify-between">
                    <span className="w-[80px] hidden lg:inline"></span>
                    <Link to="/">
                        <img src={logoImg} className="lg:w-44 w-28" alt="Logo Architetando" />
                    </Link>
                    <button onClick={() => setIsOpen(!isOpen)} className="flex items-center lg:hidden">
                        <img src={menuImg} className="w-9" alt="icone de menu" />
                    </button>
                    <span className="w-[80px] hidden lg:inline"></span>
                </div>
                <nav className="hidden w-full navBar h-10 bg-[#080520] lg:flex items-center justify-center">
                    <ul className="flex text-white text-lg justify-center gap-40 text-center">
                        <li ><Link to="/">Página Inicial</Link></li>
                        <li><Link to="/cursos">Cursos</Link></li>
                        <li><Link to="/corpo-docente">Corpo Docente</Link></li>
                        <li><Link to="/projetos">Nossos Projetos</Link></li>
                    </ul>
                </nav>
            </header>
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed h-screen w-screen z-30 overflow-hidden bg-black opacity-60 md:hidden"
                />
            )}
            <div className={
                isOpen
                    ? "fixed w-full h-[calc(100%)] bg-white translate-x-[30%] z-40 transition-all ease-in-out duration-300 md:hidden"
                    : "fixed w-full z-20 h-screen translate-x-[100%] transition-all ease-in-out duration-300 md:hidden"
                }
            >
               <div className="p-4 px-4 flex justify-between items-center w-[70%] flex-col">
                    <div className="w-full flex justify-end px-2 py-2">
                        <img src={closeImg} onClick={() => setIsOpen(!isOpen)} className="w-9" alt="" />
                    </div>
                    <ul className="flex flex-col w-full text-xl gap-3">
                        <Link onClick={() => setIsOpen(!isOpen)} to="/">Quem Somos</Link>
                        <Link onClick={() => setIsOpen(!isOpen)} to="/cursos">Cursos</Link>
                        <Link onClick={() => setIsOpen(!isOpen)} to="/projetos">Projetos</Link>
                        <Link onClick={() => setIsOpen(!isOpen)} to="/corpo-docente">Corpo Docente </Link>
                        <ul className="flex flex-col pl-4 gap-3">
                            <Link onClick={() => setIsOpen(!isOpen)} to="/corpo-docente/ana-paula-dos-santos-nascimento">Ana Paula dos Santos</Link>
                            <Link onClick={() => setIsOpen(!isOpen)} to="/corpo-docente/celma-do-carmo-de-souza-pinto">Celma do Carmo Pinto</Link>
                            <Link onClick={() => setIsOpen(!isOpen)} to="/corpo-docente/maria-jose-spiteri-tavolaro-passos">Maria José Spiteri</Link>
                            <Link onClick={() => setIsOpen(!isOpen)} to="/corpo-docente/mozart-alberto-bonazzi-da-costa">Mozart Alberto Bonazzi</Link>
                            <Link onClick={() => setIsOpen(!isOpen)} to="/corpo-docente/ricardo-andalaft">Ricardo Andalaft</Link>
                            <Link onClick={() => setIsOpen(!isOpen)} to="/corpo-docente/wellington-tohoru-nagano">Wellington Tohotu</Link>
                        </ul>
                    </ul>
               </div>  
            </div>
        </>
    )
}