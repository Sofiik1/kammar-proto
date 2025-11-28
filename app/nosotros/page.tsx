"use client";

import styles from "./nosotros.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

export default function NosotrosPage() {
  return (
    <>
      <Navbar />

      <div className={styles.wrapper}>

        {/* ---------------------- HERO ---------------------- */}
        <motion.section
          className={styles.hero}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className={styles.heroText}>
            <h1>Somos Kamar</h1>
            <p>
              Hummus argentino hecho con ingredientes reales, procesos cuidados y
              una pasión por la calidad que nos acompaña desde el origen.
            </p>
          </div>

          <div className={styles.heroImg}>
            <Image
              src="/mano-garbanzo.jpg"
              alt="Campo de garbanzos"
              fill
              className={styles.heroImgFile}
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </motion.section>

        {/* ---------------------- VALORES ---------------------- */}
            <motion.section
            className={styles.valores}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            >
            {/* Curva superior */}
            <div className={styles.bottomCurve}>
                <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path
                    fill="#ff7829e1"
                    d="M0,224 C360,96 1080,320 1440,192 L1440,320 L0,320 Z"
                ></path>
                </svg>
            </div>
            <h2 className={styles.valortitle}>Nuestros valores</h2>

            <div className={styles.valoresGrid}>

                <div className={styles.valorBox}>
                <div className={styles.valorImg}>
                    <Image src="/mano-llena.jpg" width={300} height={300} alt="Origen local" className={styles.circularImg}
                    style={{ objectPosition: "bottom center" }}
                    />

                </div>
                <h3>Origen local</h3>
                <p>
                    Trabajamos con productores locales para garantizar garbanzos frescos y de calidad premium.
                </p>
                </div>

                <div className={styles.valorBox}>
                <div className={styles.valorImg}>
                    <Image src="/relleno.jpg" width={280} height={280} alt="Producción" className={styles.circularImg}
                    style={{ objectPosition: "top center" }}
                    />
                </div>
                <h3>Producción responsable</h3>
                <p>
                    Procesos modernos y controlados, cuidando cada detalle de la elaboración.
                </p>
                </div>

                <div className={styles.valorBox}>
                <div className={styles.valorImg}>
                    <Image src="/producto1.jpg" alt="" width={300} height={300} 
                    style={{ objectPosition: "bottom center" }}
                    />
                </div>
                <h3>Calidad premium</h3>
                <p>
                    Tecnología, tradición y sabor auténtico en cada pote de hummus Kamar.
                </p>
                </div>

            </div>

             {/* Curva inferior */}
                <div className={styles.topCurve}>
                    <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path
                        fill="#ff7829e1"
                        d="M0,32 C360,160 1080,0 1440,96 L1440,0 L0,0 Z"
                    ></path>
                    </svg>
                </div>
        
            </motion.section>



        {/* ---------------------- GALERÍA ---------------------- */}
        <motion.section
          className={styles.galeria}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2  className={styles.Title}>Nuestro día a día</h2>
          <h3 className={styles.Subtitle}>Desde el origen natural del garbanzo hasta tus momentos favoritos.
            Así se vive el proceso que hace único a nuestro hummus.</h3>

          <div className={styles.galleryGrid}>

            <div className={styles.galleryItem}>
            <Image src="/campo-garbanzo.jpg" width={300} height={300} alt="garbanzo" 
            style={{ objectPosition: "bottom center" }}/>
            </div>

            <div className={styles.galleryItem}>
            <Image src="/garbanzo.jpg" width={300} height={300} alt="Garbanzo seleccionado"
            style={{ objectPosition: "bottom center" }} />
            </div>

            <div className={styles.galleryItem}>
            <Image src="/relleno.jpg" width={300} height={300} alt="Fábrica" 
            style={{ objectPosition: "top center" }}/>
            </div>

            <div className={styles.galleryItem}>
            <Image src="/selladora.jpg" width={300} height={300} alt="Fábrica" />
            </div>

            <div className={styles.galleryItem}>
            <Image src="/sellado.jpg" width={300} height={300} alt="Línea producción" />
            </div>

            <div className={styles.galleryItem}>
            <Image src="/empaques.jpg" width={300} height={300} alt="empaquetado" />
            </div>

            <div className={styles.galleryItem}>
            <Image src="/cajas.jpg" width={300} height={300} alt="Cajas Kamar" />
            </div>
            <div className={styles.galleryItem}>
            <Image src="/montacarga.jpg" width={300} height={300} alt="Logística" />
            </div>

            <div className={styles.galleryItem}>
            <Image src="/bolso-kamar.jpg" width={300} height={300} alt="Picnic" />
            </div>

            <div className={styles.galleryItem}>
            <Image src="/producto2.jpg" width={300} height={300} alt="Picnic" />
            </div>

            <div className={styles.galleryItem}>
            <Image src="/calidad.jpg" width={300} height={300} alt="Picnic" />
            </div>

            <div className={styles.galleryItem}>
            <Image src="/compartir.jpg" width={300} height={300} alt="Logística"
            style={{ objectPosition: "top center" }} />
            </div>

          </div>
        </motion.section>

      </div>
        <Footer />
    </>
  );
}
