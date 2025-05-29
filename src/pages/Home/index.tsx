import quemSomosImg from "../../assets/home/quem-somos.png"

export default function Home() {
    return (
        <section className="p-0 m-0 flex flex-col lg:gap-20 gap-10 mb-24 w-full">
            <div className="bg-[url(/src/assets/home/home.png)] bg-center bg-cover bg-no-repeat h-[300px] lg:h-[650px] 2xl:h-[750px] flex items-center px-6 lg:p-52">
                <div className=" text-white flex gap-12 flex-col">
                    <div className="flex flex-col gap-2">
                        <h1 className="lg:text-6xl text-4xl font-bold text-center lg:text-start">Venha para o Architetando</h1>
                        <span className="lg:text-2xl text-xl font-semibold text-center lg:text-start">Restauração - Conservação - Adaptação em edifícios</span>
                    </div>
                    <p className="font-semibold lg:w-[70%] hidden lg:inline-block 2xl:w-[55%] text-lg lg:text-xl">Plataforma com técnicas retrospectivas na Arquitetura Contemporânea, usando uma abordagem sobre o estudo e a conceituação de patrimônio edificado, sua identificação, valorização e preservação. Propõe ainda a discussão sobre a necessidade de preservação, seus métodos e propostas atuais que viabilizam as ações de conservação, tombamento, salvaguarda e restauro.</p>
                </div>
            </div>
            <div className="flex lg:justify-between">
                <div className="lg:w-1/2 p-4 lg:pl-24 2xl:px-30 flex flex-col 2xl:gap-6 gap-2 justify-center">
                    <h2 className="2xl:text-6xl lg:text-[56px] text-4xl font-bold text-center lg:text-start lg:mb-0 mb-2">Quem Somos</h2>
                    <p className="text-xl 2xl:text-2xl">A ARCHITETANDO é formada por um grupo de profissionais de diversas áreas de conhecimento, que buscam, de forma colaborativa e através dos conceitos reconhecidos pela Arquitetura Multidisciplinar, com suas vivências, suas expertises técnicas e acadêmicas, a elaboração de projetos, a promoção de discussão e debates acerca dos conceitos técnicos e sociais, que possam resultar em atividades de capacitação e desenvolvimento voltados para toda a sociedade, para que sirvam como ferramentas propulsoras da qualidade de vida, principalmente nos centros históricos urbanos, através da valoração da cultura e do patrimônio material e imaterial. </p>
                </div>
                <div className="w-1/2 justify-end lg:flex hidden">
                    <img src={quemSomosImg} className="w-[75%]" alt="" />
                </div>
            </div>
        </section>
    )
}