"use client";

import { useState } from "react";
import styles from "./vertical-product.module.css";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Product {
  color: string;
  image: string;
  title: string;
  desc: string;
}

interface ProductPair {
  top: Product;
  bottom: Product;
}

export default function VerticalProductScroller({
  productPairs,
}: {
  productPairs: ProductPair[];
}) {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const maxIndex = productPairs.length - 1;

  const handleScroll = (e: React.WheelEvent) => {
    if (isAnimating) return;

    setIsAnimating(true);

    if (e.deltaY > 0) {
      setIndex((prev) => Math.min(prev + 1, maxIndex));
    } else {
      setIndex((prev) => Math.max(prev - 1, 0));
    }

    setTimeout(() => setIsAnimating(false), 600);
  };

  // --- ANIMACIONES ---
  const itemVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
  };

  return (
    <div className={styles.scroller} onWheel={handleScroll}>
      <div className={styles.blobTop}></div>
      <div className={styles.blobBottom}></div>

      <AnimatePresence mode="wait">
        <motion.div key={index}>
          {/* TOP IMAGE */}
          <motion.div
            className={styles.topImage}
            variants={itemVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <Image
              src={productPairs[index].bottom.image}
              width={350}
              height={350}
              alt={productPairs[index].top.title}
              className={styles.circle}
            />
          </motion.div>

          {/* TOP CARD */}
          <motion.div
            className={styles.topCard}
            variants={itemVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
          >
            
            <h3 style={{ color: productPairs[index].top.color }}>
             {productPairs[index].top.title}
            </h3>
            <p>{productPairs[index].top.desc}</p>
          </motion.div>

          {/* BOTTOM IMAGE */}
          <motion.div
            className={styles.bottomImage}
            variants={itemVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <Image
              src={productPairs[index].top.image}
              width={350}
              height={350}
              alt={productPairs[index].bottom.title}
              className={styles.circle}
            />
          </motion.div>

          {/* BOTTOM CARD */}
          <motion.div
            className={styles.bottomCard}
            variants={itemVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
          >
            <h3 style={{ color: productPairs[index].bottom.color }}>
             {productPairs[index].bottom.title}
            </h3>
            <p>{productPairs[index].bottom.desc}</p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
