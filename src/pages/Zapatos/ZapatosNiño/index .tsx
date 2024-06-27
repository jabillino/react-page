import styles from "../zapatos.module.css"
import Navbar from "../../../components/Navbar"
import zapatoniño1 from "../../../assets/niño.png"
import zapatoniño2 from "../../../assets/niña.png"

function ZapatosNiños() {
  return (
    <article>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.contenedor_cuerpo}>
        <div className={styles.contenedor_niños}>
          <img src={zapatoniño1} alt="monky"></img>
          <h1>Calzado para niños</h1>
          <h2>encuentra en nuestras tiendas los mejores precios en zapatos para niños</h2>
          <button><strong>CONOCER MAS</strong></button>
        </div>
        <div className={styles.contenedor_niños}>
          <img src={zapatoniño2} alt="monky"></img>
          <h1>Calzado para niñas</h1>
          <h2>encuentra en nuestras tiendas los mejores  precios en zapatos para niñas</h2>
          <button><strong>CONOCER MAS</strong></button>
        </div>
      </div>
    </article>
  )
}

export default ZapatosNiños

