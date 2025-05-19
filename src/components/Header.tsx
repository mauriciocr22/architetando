import menuImg from "../assets/menu.png";
import logoImg from "../assets/logo-blue.png";

export default function Header() {
    return (
        <header className="w-full h-36">
            <div className="w-full h-[75%] p-9 px-10 flex items-center justify-between">
                <div className="flex items-center hover:cursor-pointer">
                    <img src={menuImg} className="w-9" alt="icone de menu" />
                </div>
                <img src={logoImg} className="w-44" alt="Logo Architetando" />
                <span className="w-[87px]"></span>
            </div>
            <nav className="w-full h-[25%] bg-[#080520] flex items-center justify-center">
                <ul className="flex text-white justify-center gap-36 text-center">
                    <li><a href="">Página Inicial</a></li>
                    <li><a href="">Cursos</a></li>
                    <li><a href="">Podcast</a></li>
                    <li><a href="">Nossos Projetos</a></li>
                </ul>
            </nav>
        </header>
    )
}