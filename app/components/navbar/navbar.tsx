"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { label: "Inicio", href: "/" },
    { label: "Nuestros Sabores", href: "/productos" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Dónde Comprar", href: "/donde-comprar" },
    { label: "Contactanos", href: "/contacto" },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        
        {/* LOGO */}
        <Link href="/" className={styles.logoWrapper}>
          <Image
            src="/logo.png"  // reemplazá por tu path real
            alt="Kamar Logo"
            width={55}
            height={55}
            className={styles.logo}
          />
        </Link>

        {/* LINKS */}
        <div className={styles.links}>
          {links.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.link} ${isActive ? styles.active : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
