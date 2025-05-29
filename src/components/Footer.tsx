import facebookLogo from "../assets/icones/facebook.svg";
import instagramLogo from "../assets/icones/instagram.svg";

export default function Footer() {
    return (
        <footer className="flex justify-center items-center flex-col bg-[#080520] text-white p-10 gap-4">
                <div className="flex flex-col items-center w-[65%] gap-4">
                    <span className="text-lg font-semibold">Architetando Cursos de Arquitetura</span>
                    <p>ARCHITETANDO ARQUITETURA, AUDIO VISUAL E CAPACITAÇÃO PROFISSIONAL - EIRELI é constituída como pessoa jurídica de direito privado, inscrito no CNPJ n. º 40.144.015/0001-48. Tem como seu responsável técnico RICARDO ANDALAFT - arquiteto e urbanista - CAU-SP nº A20729-2, estabelecida à Praça Visconde de Mauá, 29, sala 422, Centro Histórico, Santos, SP - CEP: 11010-000</p>
                </div>
                <ul className="flex w-[70px] gap-2">
                    <li><a target="_blank" href="https://www.facebook.com/architetando.ummundomelhor"><img src={facebookLogo} alt="" className="hover:opacity-80 transition-opacity duration-100" /></a></li>
                    <li><a target="_blank" href="https://www.instagram.com/architetando_ummundomelhor"><img src={instagramLogo} alt="" className="hover:opacity-80 transition-opacity duration-100"/></a></li>
                </ul>
        </footer>
    )
}