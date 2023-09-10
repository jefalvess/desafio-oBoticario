"use client";
import "@/styles/Slide.global.css";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Slide() {
  const imagens = [
    {
      id: 1,
      titulo: "En solo 3 pasos",
      subTitulo: "Gana 1 iPhone 14",
      buttonName: "¡CONOCE MÁS!",
      link: "/imagens/celular.webp",
      text: "Actividad válida del 01 al 30 de septiembre de 2023. Consulta los T&C completos de la actividad en https://www.oboticario.com.co/pages/concurso-iphone-14.",
    },
    {
      id: 2,
      titulo: "¡NUEVO! Egeo Choc Berry y Egeo Choc Mint",
      subTitulo: "Lleva ambos con 25%",
      buttonName: "¡LO QUIERO!",
      link: "/imagens/egeo.webp",
      text: "*Referencias Seleccionadas*No acumulable *Hasta agotar existencias*Imagen de referencia. Fecha inicio 31/08/2023 Fecha fin 2/10/2023",
    },
    {
      id: 3,
      titulo: "Amor y Amistad es OBoticário",
      subTitulo: "Regalos desde 49.900",
      buttonName: "¡APROVECHA HOY!",
      link: "/imagens/celebre.webp",
      text: "*Referencias Seleccionadas*No acumulable *Hasta agotar existencias*Imagen de referencia. Fecha inicio 31/08/2023 Fecha fin 2/10/2023",
    },
    {
      id: 4,
      titulo: "BOTIK Tecnología Suiza. Resultados rápidos y",
      subTitulo: "Combos hasta 25% OFF",
      buttonName: "¡LO NECESITO!",
      link: "/imagens/acido.webp",
      text: "*Referencias Seleccionadas*No acumulable *Hasta agotar existencias*Imagen de referencia. Fecha inicio 31/08/2023 Fecha fin 2/10/2023",
    },
    {
      id: 5,
      titulo: "¡Perfumes para todos!",
      subTitulo: "Hasta 25% OFF",
      buttonName: "¡APROVECHA YA!",
      link: "/imagens/lily.webp",
      text: "*Referencias Seleccionadas*No acumulable *Hasta agotar existencias*Imagen de referencia. Fecha inicio 31/08/2023 Fecha fin 2/10/2023",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imagens.length - 1 ? 0 : prevIndex + 1
    );
    setProgress(currentImageIndex);
  };

  const clickButtonIndex = (index: number) => {
    setCurrentImageIndex(index);
    setProgress(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      } else {
        handleNextClick();
      }
    }, 50);

    setTimeout(() => {
      clearInterval(interval);
    }, 5000);

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [progress]);

  return (
    <div role="slide-container" className="slide-container">
      <div role="slide-show" className="slide-show">
        <div role="slide-image-container" className="slide-image-container">
          {imagens.map((image, index) => (
            <Image
              role="slide-image-active"
              key={image.id}
              src={image.link}
              alt={`Imagem do produto ${index + 1}`}
              className={`slide-image-displayed ${
                index === currentImageIndex ? "slide-image-active" : "slide-image-not-active"
              }`}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
            />
          ))}
        </div>
      </div>
      <div role="slide-text-info" className="slide-text">{imagens[currentImageIndex]["text"]}</div>
      <div role="slide-text-info-slide" className="slide-grid">
        <div className="slide-row">
          <div className="slide-col">
            <h2 key={imagens[currentImageIndex]["id"]} className="slide-title">
              {imagens[currentImageIndex]["titulo"]}
            </h2>
          </div>
        </div>
        <div className="slide-row">
          <div className="slide-col">
            <h1
              key={imagens[currentImageIndex]["id"]}
              className="slide-title"
              style={{ fontSize: "50px" }}
            >
              {imagens[currentImageIndex]["subTitulo"]}
            </h1>
          </div>
        </div>
        <div className="slide-row">
          <div className="slide-col">
            <a
              role="slide-button-image"
              key={imagens[currentImageIndex]["id"]}
              href="#"
              className="slide-button"
            >
              {imagens[currentImageIndex]["buttonName"]}
            </a>
          </div>
        </div>

        <div className="slide-row" style={{ textAlign: "center" }}>
          <div className="slide-col">
            <div className="slide-progress-container">
              {imagens.map((image, index) => (
                <div
                  key={image.id}
                  className="slide-progress-row"
                  onClick={() => clickButtonIndex(index)}
                >
                  {index === currentImageIndex ? (
                    <div
                      className="slide-progress-bar"
                      style={{ width: `${progress}%` }}
                    ></div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
