import styles from "../zapatos.module.css"
import Navbar from "../../../components/Navbar"
import zapatohombre1 from "../../../assets/zapato hombre 2.png"
import zapatohombre2 from "../../../assets/zapato hombre 3.png"

function ZapatosHombre() {
  return (
    <article>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.contenedor_cuerpo}>
        <div className={styles.contenedor_niños}>
          <img src={zapatohombre1} alt="monky"></img>
          <h1>Calzado de tela</h1>
          <h2>encuenta en nuestras tiendas los mejores precios en zapatos para niños</h2>
          <button><strong>CONOCER MAS</strong></button>
        </div>
        <div className={styles.contenedor_niños}>
          <img src={zapatohombre2} alt="monky"></img>
          <h1>Calzado cuero</h1>
          <h2>encuenta en nuestras tiendas los mejores precios en zapatos para niñas</h2>
          <button><strong>CONOCER MAS</strong></button>
        </div>
      </div>
    </article>
  )
}

export default ZapatosHombre

