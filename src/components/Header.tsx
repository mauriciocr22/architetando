import menuImg from "../assets/menu.png";
import logoImg from "../assets/logo-blue.png";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="w-full">
            <div className="w-full h-32 p-9 px-16 flex items-center justify-between">
                <div className="flex items-center hover:cursor-pointer">
                    <img src={menuImg} className="w-9" alt="icone de menu" />
                </div>
                <img src={logoImg} className="w-44" alt="Logo Architetando" />
                <span className="w-[87px]"></span>
            </div>
            <nav className="w-full h-10 bg-[#080520] flex items-center justify-center">
                <ul className="flex text-white text-lg justify-center gap-40 text-center">
                    <li><Link to="/">Página Inicial</Link></li>
                    <li><Link to="">Cursos</Link></li>
                    <li><Link to="">Podcast</Link></li>
                    <li><Link to="">Nossos Projetos</Link></li>
                </ul>
            </nav>
        </header>
    )
}