import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <section className={styles.heroWrapper}>
    
       <Image src="/bolso-hero.jpg" alt="Hummus Kamar" fill priority
        className={styles.bgImage}  style={{ objectPosition: "bottom center" }}/>
        
     <div className={styles.hero}>
        <div className={styles.heroOverlay}></div>

        <h1 className={styles.heroTitle}>
          Descubrí<br />nuestro<br />hummus
        </h1>

        <p className={styles.heroSubtitle}>
          Hecho con garbanzos de calidad, sabores naturales y la receta original de Kamar.
        </p>
      </div>
   

      {/* Curva inferior */}
      <div className={styles.bottomCurve}>
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="antiquewhite"
            d="M0,224 C360,96 1080,320 1440,192 L1440,320 L0,320 Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
