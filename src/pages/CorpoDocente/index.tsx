import CardDocente from "../../components/CardDocente";
import anaPaulaImg from "../../assets/docente/ana-paula.avif"
import celmaImg from "../../assets/docente/celma.avif";
import mariaImg from "../../assets/docente/maria-jose.avif";
import mozartImg from "../../assets/docente/mozart.avif";
import ricardoImg from "../../assets/docente/ricardo-andalaft.avif";
import wellingtonImg from "../../assets/docente/wellington.avif";


export default function CorpoDocente() {
    const anaPaulaObj = {
        nome: "Ana Paula dos Santos Nascimento",
        foto: anaPaulaImg,
        profissao: "Arquitetura e Urbanista"
    }
    const celmaObj = {
        nome: "Celma do Carmo de Souza Pinto",
        foto: celmaImg,
        profissao: "Historiadora"
    }
    const mariaObj = {
        nome: "Maria José Spiteri Tavolaro Passos",
        foto: mariaImg,
        profissao: "Artista Plástica"
    }
    const mozartObj = {
        nome: "Mozart Alberto Bonazzi da Costa",
        foto: mozartImg,
        profissao: "Artista Plástico"
    }
    const ricardoObj = {
        nome: "Ricardo Andalaft",
        foto: ricardoImg,
        profissao: "Arquiteto e Urbanista"
    }
    const wellingtonObj = {
        nome: "Wellington Tohoru Nagano",
        foto: wellingtonImg,
        profissao: "Arquiteto e Urbanista"
    }

    return (
        <section className="flex w-[1100px] 2xl:w-[1366px] items-center justify-center flex-col gap-8 p-8 my-0 mx-auto">
            <h1 className="text-4xl font-bold">Corpo Docente</h1>
            <div className="grid grid-cols-3 grid-rows-2 gap-14 gap-x-8">
                <CardDocente fotoDocente={anaPaulaObj.foto} nomeDocente={anaPaulaObj.nome} profissaoDocente={anaPaulaObj.profissao} curriculoDocente=""/>
                <CardDocente fotoDocente={celmaObj.foto} nomeDocente={celmaObj.nome} profissaoDocente={celmaObj.profissao} curriculoDocente=""/>
                <CardDocente fotoDocente={mariaObj.foto} nomeDocente={mariaObj.nome} profissaoDocente={mariaObj.profissao} curriculoDocente=""/>
                <CardDocente fotoDocente={mozartObj.foto} nomeDocente={mozartObj.nome} profissaoDocente={mozartObj.profissao} curriculoDocente=""/>
                <CardDocente fotoDocente={ricardoObj.foto} nomeDocente={ricardoObj.nome} profissaoDocente={ricardoObj.profissao} curriculoDocente=""/>
                <CardDocente fotoDocente={wellingtonObj.foto} nomeDocente={wellingtonObj.nome} profissaoDocente={wellingtonObj.profissao} curriculoDocente=""/>
            </div>
        </section>
    )
}