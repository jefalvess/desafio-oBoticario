"use client";
import "@/styles/Slide.global.css";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import imagens from "@/api/data"; // Importa o array de dados do arquivo externo

export default function Slide() {
  
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
              sizes="100vw"
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
            <a role="slide-button-text" href={imagens[currentImageIndex]["type"]}
              key={imagens[currentImageIndex]["id"]}
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
