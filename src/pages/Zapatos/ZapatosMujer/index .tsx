import styles from "../zapatos.module.css"
import Navbar from "../../../components/Navbar"
import zapatomujer1 from "../../../assets/zapato mujer 2.png"
import zapatomujer2 from "../../../assets/zapato mujer.png"

function ZapatoMujer() {
  return (
    <article>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.contenedor_cuerpo}>
        <div className={styles.contenedor_niños}>
          <img src={zapatomujer1} alt="monky"></img>
          <h1>Calzado Formal</h1>
          <h2>encuenta en nuestras tiendas los mejores precios en zapatos para niños</h2>
          <button><strong>CONOCER MAS</strong></button>
        </div>
        <div className={styles.contenedor_niños}>
          <img src={zapatomujer2} alt="monky"></img>
          <h1>Calzado Informal</h1>
          <h2>encuenta en nuestras tiendas los mejores precios en zapatos para niñas</h2>
          <button><strong>CONOCER MAS</strong></button>
        </div>
      </div>
    </article>
  )
}

export default ZapatoMujer

