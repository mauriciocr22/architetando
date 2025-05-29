import CardDocente from "../../components/CardDocente";
import { docentes } from "../../data/docentes";

export default function CorpoDocente() {
  return (
    <section className="flex w-[1000px] 2xl:w-[1200px] items-center justify-center flex-col gap-8 p-8 my-0 mx-auto">
      <h1 className="text-4xl font-bold">Corpo Docente</h1>
      <div className="grid grid-cols-3 grid-rows-2 gap-14 gap-x-8">
        {docentes.map((docente, index) => (
          <CardDocente
            key={index}
            fotoDocente={docente.foto}
            nomeDocente={docente.nome}
            profissaoDocente={docente.profissao}
            curriculoDocente={docente.slug}
          />
        ))}
      </div>
    </section>
  );
}
