import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import Cursos from "./pages/Cursos"
import Projetos from "./pages/Projetos"
import CorpoDocente from "./pages/CorpoDocente"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="min-h-[calc(100vh-411px)]">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cursos" element={<Cursos />}/>
          <Route path="/projetos" element={<Projetos />}/>
          <Route path="/corpo-docente" element={<CorpoDocente />}/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
