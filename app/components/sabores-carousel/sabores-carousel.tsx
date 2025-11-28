"use client";

import { useEffect, useState } from "react";
import styles from "./sabores.module.css";

const sabores = [
  { nombre: "Pimentón", desc: "Ligeramente picante. Ideal para: bruschettas, bowls y dips con vegetales frescos.", img: "/pimenton.jpg", color: "#e23726" },
  { nombre: "Sésamo y Ajo", desc: "Tostado con un toque de ajo. Ideal para: papas al horno, verduras grilladas y carnes.", img: "/sesamo-ajo.png", color: "#409e21" },
  { nombre: "Olivas Negras", desc: "Sabroso con el carácter único de las aceitunas. Ideal para: pastas frías, bruschettas y picadas.", img: "/olivas.png", color: "#8c0172" },
  { nombre: "Guacamole", desc: "Fresco, verde y con notas cítricas. Ideal para: tacos, nachos y sandwiches estilo tex-mex.", img: "/guacamole1.png", color: "#668f34" },
  { nombre: "Clásico", desc: "Suave, cremoso y auténtico. Ideal para: picadas, wraps y mezze mediterráneo.", img: "/tradicional.png", color: "#ea6906" },
  { nombre: "Babaganoush", desc: "Hecho con berenjenas asadas. Ideal para: panes árabes, ensaladas y platos grillados.", img: "/babaganoush.png", color: "#8a006f" },
];
export default function CarouselSabores() {
   const [i, setI] = useState(0); const next = () => setI((p) => (p + 1) % sabores.length); 
   const prev = () => setI((p) => (p - 1 + sabores.length) % sabores.length); 
   useEffect(() => { const t = setInterval(() => next(), 10000);
   return () => clearInterval(t); }, []);
  const actual = sabores[i]; 
  const siguiente = sabores[(i + 1) % sabores.length];
  const anterior = sabores[(i - 1 + sabores.length) % sabores.length]; 
  
  return ( 
  <>
    <div className={styles.wrapper}> 
      
      <h1 className={styles.sectionTitle}>Elegí tu hummus para cada ocasión</h1> 

      {/* Imagen siguiente */}
       <img src={siguiente.img} className={`${styles.small} ${styles.top}`} /> 
      
      {/* Imagen principal */} <img src={actual.img} className={styles.main} /> 
      
      {/* Imagen anterior*/} <img src={anterior.img} className={`${styles.small} ${styles.bottom}`} /> 
      
      {/* Panel info */} 
      <div className={styles.info} style={{ backgroundColor: actual.color }}>
         <h2>{actual.nombre}</h2>
         <p>{actual.desc}</p> 
         <button className={styles.cta}>Conocé nuestros sabores</button> 
      
      </div>

    </div>
        {/* Curva inferior */}
                <div className={styles.topCurve}>
                    <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path
                        fill="antiquewhite"
                        d="M0,32 C360,160 1080,0 1440,96 L1440,0 L0,0 Z"
                    ></path>
                    </svg>
                </div>
    </>
  );
}