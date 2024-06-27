import styles from "./home.module.css"
import Navbar from "../../components/Navbar"
import piesfeos from "../../assets/pies feos.png"
import niño from "../../assets/niño.png"
import hombre from "../../assets/zapato hombre.png"
import mujer from "../../assets/zapato mujer.png"

function Home() {
  return (
    <article>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.contenedor_cuerpo}>
        <div className={styles.contenedor_izquierdo}>
          <img src={piesfeos} alt="pies_feos"></img>
          <h1>¿Problemas de calzado?</h1>
          <h2>¡Nosotros nos encargamos!</h2>
        </div>
        <div className={styles.contenedor_derecho}>
          <p>
            Tenemos todo tipo de calzado para dama, caballero, niños, niñas, sin género, ecofriendly e
            incluso, si no tienes pies, ¡tenemos los zapatos para ti!
          </p>
          <button id="mas"><a href="/sabermas">CONOCER MAS</a></button>
        </div>
      </div>
      
      <div className={styles.contenedor_cuerpo}>
        <div className={styles.contenedor_img}>

          <div className={styles.contenedor_zapato}>
            <div>
              <img src={niño} alt="niño"></img>
            </div>
            <div className={styles.texto_zapato}>
              <button id="01"><a href="/sabermas">01</a></button>
              <h2>zapatos niños</h2>
            </div>
          </div>

          <div className={styles.contenedor_zapato}>
            <div>
              <img src={hombre} alt="hombre"></img>
            </div>
            <div className={styles.texto_zapato}>
              <button id="02"><a href="/sabermas">02</a></button>
              <h2>zapatos hombre</h2>
            </div>
          </div>

          <div className={styles.contenedor_zapato}>
            <div>
              <img src={mujer} alt="mujer"></img>
            </div>
            <div className={styles.texto_zapato}>
              <button id="03"><a href="/sabermas">03</a></button>
              <h2>zapatos mujer</h2>
            </div>
          </div>
        </div>
      </div>

    </article >
  )
}

export default Home
