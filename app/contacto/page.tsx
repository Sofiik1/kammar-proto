"use client";

import styles from "./contacto.module.css";
import { Mail, Instagram } from "lucide-react";
import Image from "next/image";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

export default function ContactoPage() {
  return (
    <><Navbar />
        <div className={styles.page}>
      <div className={styles.container}>

        <h1 className={styles.title}>¿Necesitás ayuda?</h1>
        <p className={styles.subtitle}>
          Elegí un medio de contacto o escribinos directamente.
        </p>

        {/* ICONOS */}
        <div className={styles.contactOptions}>

          {/* WhatsApp */}
          <a
            href="https://wa.me/5493814028462"
            target="_blank"
            className={styles.iconBox}
          >
            <div className={styles.iconCircle}>
              <Image src="/whatsapp-kamar.png" width={32} height={32} alt="WhatsApp" />
            </div>
            <span className={styles.iconLabel}>WhatsApp</span>
          </a>

          {/* Email */}
          <a href="mailto:hola@kamar.com" className={styles.iconBox}>
            <div className={styles.iconCircle}>
              <Mail size={28} />
            </div>
            <span className={styles.iconLabel}>Email</span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/kamar.hummus"
            target="_blank"
            className={styles.iconBox}
          >
            <div className={styles.iconCircle}>
              <Instagram size={28} />
            </div>
            <span className={styles.iconLabel}>Instagram</span>
          </a>

        </div>

        {/* FORM */}
        <form className={styles.form}>
          <div className={styles.field}>
            <label>Nombre</label>
            <input type="text" required />
          </div>

          <div className={styles.field}>
            <label>Email</label>
            <input type="email" required />
          </div>

          <div className={styles.field}>
            <label>Mensaje</label>
            <textarea rows={4} required />
          </div>

          <button type="submit" className={styles.button}>
            Enviar
          </button>
        </form>
      </div>
    </div>        
          <Footer />
      </>
  );
}

    

