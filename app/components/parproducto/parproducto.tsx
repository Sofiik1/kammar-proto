"use client";

import styles from "./parproducto.module.css";
import Image from "next/image";
import type { StaticImageData } from "next/image";

type Product = {
  image: string | StaticImageData;
  title: string;
  desc?: string;
};

type ProductPairProps = {
  top: Product;
  bottom: Product;
};

export default function ProductPair({ top, bottom }: ProductPairProps) {
  return (
    <section className={styles.section}>
      
      {/* ----- TOP PRODUCT ----- */}
      <div className={styles.topBlob}></div>

      <div className={styles.topImage}>
        <Image
          src={top.image}
          alt={top.title}
          width={340}
          height={340}
          className={styles.circleImg}
        />
      </div>

      <div className={styles.cardTop}>
        <h3>{top.title}</h3>
        <p>{top.desc}</p>
      </div>

      {/* ----- BOTTOM PRODUCT ----- */}
      <div className={styles.bottomBlob}></div>

      <div className={styles.bottomImage}>
        <Image
          src={bottom.image}
          alt={bottom.title}
          width={340}
          height={340}
          className={styles.circleImg}
        />
      </div>

      <div className={styles.cardBottom}>
        <h3>{bottom.title}</h3>
        <p>{bottom.desc}</p>
      </div>
    </section>
  );
}
