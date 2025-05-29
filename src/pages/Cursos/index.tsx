import { Link } from "react-router-dom";

import cursoImg from "../../assets/icones/curso-image.png"
import chevronRight from "../../assets/icones/chevron-right.png"

export default function Cursos() {
    return (
        <section className="flex justify-center flex-col items-center p-8 gap-8">
            <h1 className="text-4xl font-bold">Nossos Cursos</h1>
            <Link to="/curso-de-capacitação-em-patrimônio" className="border rounded-lg flex items-center h-full">
                <img src={cursoImg} className="p-2" alt="" />
                <span className="text-3xl pr-4 font-semibold">Curso de Capacitação em Patrimônio Material das Cidades</span>
                <div className="bg-[#09043A] h-[107px] w-[107px] flex items-center justify-center"><img src={chevronRight} alt="" /></div>
            </Link>
        </section>
    )
}