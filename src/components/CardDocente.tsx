import { Link } from "react-router-dom";

interface CardDocenteProps {
    fotoDocente: string;
    nomeDocente: string;
    curriculoDocente: string;
    profissaoDocente: string;
}

export default function CardDocente({fotoDocente, nomeDocente, curriculoDocente, profissaoDocente}: CardDocenteProps ) {
    return (
        <Link to={`/corpo-docente/${curriculoDocente}`} className="relative group">
            <img src={fotoDocente} className="w-full z-20 rounded-md transition-all" alt="" />
            <div className="absolute inset-0 rounded-md group-hover:bg-black/20 transition-all duration-200"></div>
            <div className="absolute bottom-0 left-0 flex flex-col  w-full px-4 py-2 bg-gradient-to-t from-indigo-900/70 to-transparent  text-white overflow-hidden rounded-t-lg rounded-b-md z-10 h-[27%] 2xl:h-[70px] 2xl:group-hover:h-[106px] group-hover:h-[37%] transition-all duration-200">
                <h2 style={{ textShadow: '0 1px 4px rgba(0,0,0,0.6)' }} className="text-xl font-bold">{nomeDocente}</h2>
                <span style={{ textShadow: '0 1px 4px rgba(0,0,0,0.6)' }} className="mb-2">{profissaoDocente}</span>
                <span style={{ textShadow: '0 1px 4px rgba(0,0,0,0.6)' }} className="lg:opacity-0 group-hover:opacity-100 underline font-semibold transition-opacity duration-200 text-lg">Conferir currículo</span>
            </div>
        </Link>
    )
}