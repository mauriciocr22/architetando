import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import Cursos from "./pages/Cursos"
import Projetos from "./pages/Projetos"
import CorpoDocente from "./pages/CorpoDocente"
import CurriculoDocente from "./pages/CurriculoDocente"
import CursoPatrimonio from "./pages/CursoPatrimonio"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="lg:min-h-[calc(100vh-411px)] pt-[80px]">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cursos" element={<Cursos />}/>
          <Route path="/projetos" element={<Projetos />}/>
          <Route path="/corpo-docente" element={<CorpoDocente />}/>
          <Route path="/corpo-docente/:slug" element={<CurriculoDocente />}/>
          <Route path="/curso-de-capacitação-em-patrimônio" element={<CursoPatrimonio />}/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
