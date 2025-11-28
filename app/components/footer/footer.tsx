"use client";

import Image from "next/image";
import styles from "./footer.module.css";
import { Instagram, Mail} from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        
        {/* Redes */}
        <div className={styles.socials}>
          <a href="https://instagram.com/kamar.hummus" target="_blank">
            <Instagram className={styles.icon} />
          </a>

          <a href="mailto:hola@kamar.com">
            <Mail className={styles.icon} />
          </a>

          <a href="https://wa.me/5493814028462" target="_blank" rel="noreferrer">
            <Image 
              src="/whatsapp.png" 
              alt="WhatsApp" 
              width={26} 
              height={26} 
              className={styles.icon}
            />
          </a>
        </div>

        <p className={styles.copy}>© 2025 Kamar · Industria Argentina</p>
      </div>
    </footer>
  );
}
