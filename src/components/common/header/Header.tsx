import "@/styles/Header.global.css";
import Image from "next/image";

export default function BodyInfo() {
  return (
    <div role="header-container" className="header-container">
      <div className="header-sub-container">
        <div>
          <div role="header-menu" className="header-menu-icon header-hidden-menu">&#9776;</div>
        </div>
        <div className="header-content">
          <div role="header-logo" className="header-options" style={{ paddingRight: "1rem" }}>
            <a href="/">
              <Image
                className="header-imagem-de-logo"
                src="https://www.oboticario.com.co/cdn/shop/files/Brand-logo-new_1_360x.webp?v=1671562107"
                alt="logo da empresa"
                priority={true}
                width={500}
                height={300}
              />
            </a>
          </div>
          <div role="header-option-1" className="header-options header-hidden-content">
            <a href="/Productos" className="myLink">
              PRODUCTOS
            </a>
          </div>
          <div role="header-option-2" className="header-options header-hidden-content">
            <a href="/Regalos" className="myLink">
              REGALOS
            </a>
          </div>
          <div role="header-option-3" className="header-options header-hidden-content">
            <a href="/Marcas" className="myLink">
              MARCAS
            </a>
          </div>
          <div role="header-option-4" className="header-options header-hidden-content">
            <a href="/Promociones" className="myLink">
              PROMOCIONES
            </a>
          </div>
          <div role="header-option-5" className="header-options header-hidden-content">
            <a
              href="/Egeo"
              style={{
                border: "1px solid white",
                padding: "0.4rem",
                borderRadius: "5px",
              }}
              className="myLink"
            >
              EGEO
            </a>
          </div>
          <div role="header-option-6" className="header-options header-hidden-content">
            <a href="/Botifavoritos" className="myLink">
              BOTIFAVORITOS
            </a>
          </div>
          <div role="header-option-7" className="header-options header-hidden-content">
            <a href="/Lanzamientos" className="myLink">
              LANZAMIENTOS
            </a>
          </div>
          <div role="header-option-8" className="header-options header-hidden-content">
            <a href="/Sobrenotros" className="myLink">
              SOBRE NOSOTROS
            </a>
          </div>
          <div role="header-option-9" className="header-options header-hidden-content">
            <a href="/Sobrenotros" className="myLink">
              SOBRE NOSOTROS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
