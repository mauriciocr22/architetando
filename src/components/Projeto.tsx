interface ProjetoProps {
    nomeProjeto: string;
    imagensProjeto: string[];
    ehUltimo?: boolean;
}

export default function Projeto({ imagensProjeto, nomeProjeto, ehUltimo }: ProjetoProps) {
    return (
        <div className="w-full">
            <h2 className="lg:text-3xl text-2xl font-bold mb-4">{nomeProjeto}</h2>
            <div className={!ehUltimo ? "flex pb-4 mb-14 border-b-2 border-[#09043A]" : "flex"}>
                {imagensProjeto.map((src, index) => (
                    <img key={index} className="max-w-[50%] 2xl:max-w-[100%]" src={src} alt={`Imagem ${index + 1}`} />
                ))}
            </div>
        </div>
    )
}