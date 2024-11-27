import logo from "../../assets/logo.png"
import busca from "../../assets/search.png"
import {BrowserRouter, Route, Routes, Link}   from "react-router-dom"
import Inicio from "../../Pages/Inicio/Inicio"
import Doados from "../../Pages/Doados/Doados"
import QueroDoar from "../../Pages/QueroDoar/QueroDoar"
import S from "./header.module.scss"



export default function header (){

    return(
    <BrowserRouter>

        <header>
            <section className={S.boxlogo}>
                <img src={logo} alt="logo" /> 
                <h1>Livro Vai na Web</h1>
            </section>

            <nav className={S.boxMenu}>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/doados">Livros Doados</Link></li>
                    <li><Link to="queroDoar">Quero doar</Link></li>
                </ul>

            </nav>
                <div className={S.boxInput}>
                    <input type="text"  placeholder="o que você procura" />
                    <img src={busca} alt=" " />
                </div>
            

        </header>

        
    <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/doados" element={<Doados />} />
        <Route path="/queroDoar" element={<QueroDoar />} />
    </Routes>
    </BrowserRouter>
    )


}