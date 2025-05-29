import { useParams } from "react-router-dom";
import { docentes } from "../../data/docentes";

export default function CurriculoDocente() {
    const { slug } = useParams();
    const docente = docentes.find(d => d.slug === slug);

    return (
        <section className="flex justify-center flex-col items-center p-8 gap-8">
            { !docente ? (
                <h1 className="text-3xl font-bold lg:text-start text-center">Docente não encontrado</h1>
            ) : (
                <div className="flex justify-center items-center flex-col gap-6 lg:w-[1000px] lg:text-start text-center">
                    <h1 className="text-3xl font-bold">{docente.nome}</h1>
                    <img className="w-4/5 lg:w-1/5 2xl:w-1/3 mb-4" src={docente.foto} alt={`Foto do docente ${docente.nome}`} />
                    <p className="text-justify text-lg">{docente.curriculo}</p>
                </div>

            )}
        </section>
    )
}