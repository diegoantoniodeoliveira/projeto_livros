import S from "./queroDoar.module.scss"
import livro from "../../assets/livro_form.png"
import axios from 'axios'
import {useState} from "react"


export default function QueroDoar(){

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [imagem_url, setImagem_url] = useState("")

    const enviarDados = async()=>{

        const urlApi = "https://desafio-back-h7bi.onrender.com"

        const dadosEnviar = {
            titulo,
            categoria,
            autor,
            imagem_url
        }

        const envioApi = await axios.post(urlApi,dadosEnviar)

        alert('Livro enviado')

        setTitulo("")
        setCategoria("")
        setAutor("")
        setImagem_url("")

    }





    const capturaTitulo = (e) =>{
        setTitulo(e.target.value)
    }

    const capturaCategoria = (e) =>{
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) =>{
        setAutor(e.target.value)
    }

    const capturaImagem = (e) =>{
        setImagem_url(e.target.value)
    }




    return(
        <section className={S.principal}>
            <section className={S.container}>
                <h2> Por favor, preencha o formulário com suas informações e as informações do Livro </h2>
                <form onSubmit={(e)=> e.preventDefault()} >
                    <div>
                        <img src={livro} alt="icone livro" />
                        <h3>Informaçãos do Livro</h3>
                    </div>
                    <input type="text" placeholder="Titulo" onChange={capturaTitulo} value={titulo}/>
                    <input type="text" placeholder="Categoria" onChange={capturaCategoria} value={categoria}/>
                    <input type="text" placeholder="Autor" onChange={capturaAutor} value={autor}/>
                    <input type="text" placeholder="Link da imagem" onChange={capturaImagem} value={imagem_url}/>
                    <input type="submit" value="DOAR"  onClick={enviarDados} />
                </form>
            </section>
        </section>
    )
}