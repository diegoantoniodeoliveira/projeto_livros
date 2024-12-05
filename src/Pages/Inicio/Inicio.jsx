import S from "./inicio.module.scss"
import card_balance from "../../assets/card_balance.png"
import card_community from "../../assets/card_community.png"
import card_reading from "../../assets/card_reading.png"
import card_transform from "../../assets/card_transform.png"

export default function Inicio(){
    return(
        <main>       
            <section>
                <section className={S.banner}>
                    <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
                </section>
                <section className={S.devoDoar}>
                    <div>
                        <h2> Por devo doar?</h2>
                    </div>
                    <section className={S.boxCard}>
                    <article>
                        <img src={card_community} alt="desenho de circulo com 4 pessoas" />
                        <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </article>
                    <article>
                        <img src={card_reading} alt="desenho de pessoa lendo" />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </article>
                    <article>
                        <img src={card_transform} alt="desenho de 6 pessoas com uma mao em cima" />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </article>
                
                    <article>
                        <img src={card_balance} alt="desenho de  uma balança" />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </article>
                </section>
                </section>
            </section>
        </main>
    )
}
