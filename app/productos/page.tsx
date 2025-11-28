"use client";
import VerticalProductScroller from "../components/vertical-product/vertical-product";
import Navbar from "../components/navbar/navbar";
import { useEffect } from "react";

export default function ProductosPage() {

  const productPairs = [
    {
      top: {
        title: "Pimentón",
        desc: "Hummus cremoso con pimentón ahumado. Especial para picadas y bruschettas.",
        image: "/producto-pimenton.png",
        color: "#e23726",
      },
      bottom: {
        title: "Clásico",
        desc: "Hummus suave y equilibrado. El sabor tradicional, perfecto para wraps y mezze.",
        image: "/producto-clasico.png",
        color: "#ea6906",
      }
    },
    {
      top: {
        title: "Guacamole",
        desc: "Hummus con palta, limón y cilantro. Fresco, vibrante e ideal para tacos y nachos.",
        image: "/producto-guacamole.png",
        color: "#668f34",
      },
      bottom: {
        title: "Babaganoush",
        desc: "Hummus ahumado de berenjena asada.Textura sedosa y sabor intenso.",
        image: "/producto-babaganoush.png",
        color: "#8a006f",
      }
    },
    {
      top: {
        title: "Olivas negras",
        desc: "Hummus gourmet con olivas seleccionadas. Aroma mediterráneo y sabor profundo.",
        image: "/producto-olivas.png",
        color: "#8c0172",
      },
      bottom: {
        title: "Sésamo y ajo",
        desc: "Hummus tostado con sésamo y ajo fresco. Intenso, aromático y lleno de carácter.",
        image: "/producto-sesamo-ajo.png",
        color: "#409e21",
      }
    },
    
  ];

  useEffect(() => {
    // Bloquea el scroll global
    document.body.style.overflow = "hidden";

    return () => {
      // Lo restaura cuando salís de esta página
      document.body.style.overflow = "auto";
    };
  }, []);
    

  return   <>
  <Navbar />
  <VerticalProductScroller productPairs={productPairs} />
  </>;
}
