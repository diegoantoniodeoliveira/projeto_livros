import S from "./doados.module.scss"
import livro from "../../assets/li_doados.png"
import axios from 'axios'
import {useState, useEffect} from "react"

export default function Doados(){

    const [livros, setLivros] = useState([])

    const getLivros = async () => {
        const response = await axios.get("https://desafio-back-h7bi.onrender.com/livros")
        setLivros(response.data)
        console.log(response)
    }

    useEffect(()=>{
        getLivros()
    },[])

    
    return(
        <section className={S.boxDoados}>
            <h2>Livros Doados</h2>            
            <section className={S.boxCard}>
                <article>
                    <img src={livro} alt="capa livro o protagonista" />
                    <h3>O protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </article>

                {livros.map((item)=>(
                    <article key={item.id}>
                        <img src={item.imagem_url} alt={`Imagem do livro: ${item.titulo}`} />  
                        <h3>{item.titulo}</h3>
                        <p>{item.categoria}</p>
                        <p>{item.autor}</p>
                    </article>

                ))}
            </section>
        </section>
    )
}