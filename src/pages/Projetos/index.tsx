import Projeto from "../../components/Projeto";

import plantaRosarioImg from "../../assets/projetos/planta-rosario.png";
import rosarioImg from "../../assets/projetos/igreja-rosario.png";
import plantaItanhaemImg from "../../assets/projetos/planta-itanhaem.png";
import plantaMonteSerratImg from "../../assets/projetos/planta-monte-serrat.png";
import monteSerratImg from "../../assets/projetos/monte-serrat.png"
import plantaDesterroImg from "../../assets/projetos/planta-desterro.png"

export default function Projetos() {

    const imagensRosario = [plantaRosarioImg, rosarioImg];
    const imagensItanhaem = [plantaItanhaemImg];
    const imagensMonteSerrat = [plantaMonteSerratImg, monteSerratImg];
    const imagensDesterro = [plantaDesterroImg];

    return(
        <section className="flex 2xl:w-[1366px] items-center justify-center flex-col p-8 gap-8 my-0 mx-auto">
            <h1 className="text-4xl font-bold">Nossos Projetos</h1>
            <Projeto nomeProjeto="Igreja do Rosário" imagensProjeto={imagensRosario}/>
            <Projeto nomeProjeto="Igreja Matriz de Itanhaem" imagensProjeto={imagensItanhaem}/>
            <Projeto nomeProjeto="Monte Serrat" imagensProjeto={imagensMonteSerrat}/>
            <Projeto nomeProjeto="Capela Nossa Senhora do Desterro" imagensProjeto={imagensDesterro} ehUltimo/>
        </section>
    )
}