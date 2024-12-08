import S from "./footer.module.scss"
import re_fb from "../../assets/re_fb.png"
import re_ins from "../../assets/re_ins.png"
import re_ld from "../../assets/re_ld.png"
import re_tw from "../../assets/re_tw.png"
import re_yt from "../../assets/re_yt.png"

export default function footer (){

    return(
        <footer>
           <section className={S.boxSocial}>
            <h3>4002-8922</h3>
                <nav>
                    <a href=""> <img src={re_fb} alt="icone logo facebook" /></a>
                    <a href=""> <img src={re_ins} alt="icone logo instagram" /></a>
                    <a href=""> <img src={re_ld} alt="icone logo linkedin" /></a>
                    <a href=""> <img src={re_tw} alt="icone logo twitter" /></a>
                    <a href=""> <img src={re_yt} alt="icone logo youtube" /></a>
                </nav>
            </section>
            <section className={S.boxTexto}>
                <p>
                    Layout desenvolvido pela Vai Na Web para fins educativos - 2024
                </p>
            </section>
        </footer>
    )
}