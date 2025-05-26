import { Link } from "react-router-dom";

interface CardDocenteProps {
    fotoDocente: string;
    nomeDocente: string;
    curriculoDocente: string;
    profissaoDocente: string;
}

export default function CardDocente({fotoDocente, nomeDocente, curriculoDocente, profissaoDocente}: CardDocenteProps ) {
    return (
        <Link to={curriculoDocente} className="relative group">
            <img src={fotoDocente} className="w-full z-20 rounded-md transition-all" alt="" />
            <div className="absolute inset-0 rounded-md group-hover:bg-black/20 transition-all duration-200"></div>
            <div className="absolute bottom-0 left-0 flex flex-col  w-full px-4 py-2 bg-[#1f147c] shadow-[0_-4px_10px_rgba(0,0,0,0.4)] text-white overflow-hidden rounded-t-lg rounded-b-md z-10 h-1/10 group-hover:h-1/4 transition-all duration-200">
                <h2 className="text-lg font-bold">{nomeDocente}</h2>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 mb-2">{profissaoDocente}</span>
                <span className="opacity-0 group-hover:opacity-100 underline font-semibold transition-opacity duration-200">Conferir currículo</span>
            </div>
        </Link>
    )
}