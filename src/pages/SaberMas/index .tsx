import styles from "./sabermas.module.css"
import Navbar from "../../components/Navbar"
import zapatoscostura from "../../assets/zapato mujer 2.png"
import zapatoscuero from "../../assets/mujer zapato.png"
import zapatosniña from "../../assets/niña.png"
import zapatosniño from "../../assets/niño.png"
import zapatoselegante from "../../assets/zapato hombre 3.png"

function SaberMas() {
  return (
    <article>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.contenedor_cuerpo}>
        <div className={styles.contenedor_productos}>
          <h1>Muestra de Productos</h1>
          <div className={styles.contenedor_producto}>
            <div className={styles.producto}>
              <img src={zapatoscostura} alt=""></img>
                <div className={styles.producto_info}>
                  <div className={styles.producto_nombre}>Zapatos con costura</div>
                  <div className={styles.producto_descripción}>Descubre la elegancia y el confort de nuestros zapatos con
                    costura. Fabricados con materiales de alta calidad, estos zapatos combinan estilo
                    clásico y durabilidad. Cada par cuenta con costuras reforzadas que no solo añaden un
                    toque distintivo, sino que también garantizan una mayor resistencia y vida útil. Ideales
                    para cualquier ocasión, desde reuniones de trabajo hasta salidas casuales.</div>
                </div>
            </div>
            <div className={styles.producto}>
              <img src={zapatoscuero} alt=""></img>
                <div className={styles.producto_info}>
                  <div className={styles.producto_nombre}>Zapato de cuero</div>
                  <div className={styles.producto_descripción}>elegancia y sofisticación en cada paso con nuestros
                    zapatos de cuero de alta calidad. Diseñados para el hombre moderno que valora tanto el
                    estilo como el confort, estos zapatos son el complemento perfecto para cualquier ocasión
                    formal o casual.</div>
                </div>
            </div>
            <div className={styles.producto}>
              <img src={zapatosniña} alt=""></img>
                <div className={styles.producto_info}>
                  <div className={styles.producto_nombre}>Zapatos infanties</div>
                  <div className={styles.producto_descripción}>!nueva colección de zapatos infantiles, diseñados pensando
                    en la comodidad y el estilo de los más pequeños! Estos zapatos combinan calidad,
                    durabilidad y un diseño atractivo para mantener a tus hijos felices y con estilo en cada
                    paso.</div>
                </div>
            </div>
            <div className={styles.producto}>
              <img src={zapatosniño} alt=""></img>
                <div className={styles.producto_info}>
                  <div className={styles.producto_nombre}>Zapatos con decoracion de luces</div>
                  <div className={styles.producto_descripción}>D¡Ilumina tu estilo con nuestros increíbles zapatos con
                    decoración de luces! Estos zapatos no solo son cómodos y de alta calidad, sino que
                    también están diseñados para destacar y captar todas las miradas.</div>
                </div>
            </div>
            <div className={styles.producto}>
              <img src={zapatoselegante} alt=""></img>
                <div className={styles.producto_info}>
                  <div className={styles.producto_nombre}>Zapatos elegantes</div>
                  <div className={styles.producto_descripción}>diseñados para ofrecerte el máximo confort y estilo en
                    cada paso. Fabricados con materiales de alta calidad y una atención meticulosa a los
                    detalles, nuestros zapatos son la elección perfecta para cualquier ocasión formal o
                    eventos importantes.</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default SaberMas

