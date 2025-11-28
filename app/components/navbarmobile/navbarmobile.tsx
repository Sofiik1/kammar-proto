"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./NavbarMobile.module.css";

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { label: "Inicio", href: "/" },
    { label: "Nuestros Sabores", href: "/sabores" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Dónde Comprar", href: "/donde-comprar" },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.topbar}>
        {/* LOGO */}
        <Link href="/" className={styles.logoWrapper}>
          <Image
            src="/kamar-logo.png"
            alt="Kamar logo"
            width={50}
            height={50}
            className={styles.logo}
          />
        </Link>

        {/* HAMBURGER */}
        <button className={styles.burger} onClick={() => setOpen(true)}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </button>
      </div>

      {/* SLIDE MENU */}
      <div className={`${styles.menu} ${open ? styles.open : ""}`}>
        <button className={styles.closeBtn} onClick={() => setOpen(false)}>
          ✕
        </button>

        <div className={styles.menuLinks}>
          {links.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.menuLink} ${isActive ? styles.active : ""}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* BACKDROP */}
      {open && <div className={styles.backdrop} onClick={() => setOpen(false)} />}
    </nav>
  );
}
