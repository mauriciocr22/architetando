interface ProjetoProps {
    nomeProjeto: string;
    imagensProjeto: string[];
    ehUltimo?: boolean;
}

export default function Projeto({ imagensProjeto, nomeProjeto, ehUltimo }: ProjetoProps) {
    return (
        <div className="w-full">
            <h2 className="text-3xl font-bold">{nomeProjeto}</h2>
            <div className={!ehUltimo ? "flex pb-4 mb-6 border-b-2 border-[#09043A]" : "flex"}>
            {/* <div className="flex pb-6 border-b-2 border-[#09043A]"> */}
                {imagensProjeto.map((src, index) => (
                    <img key={index} src={src} alt={`Imagem ${index + 1}`} />
                ))}
            </div>
        </div>
    )
}