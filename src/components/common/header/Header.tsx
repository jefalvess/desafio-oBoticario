import "@/styles/Header.global.css";
import Image from "next/image";
import Link from "next/link";

export default function BodyInfo() {
  return (
    <div role="header-container" className="header-container">
      <div className="header-sub-container">
        <div className="div1">
          <div role="header-menu" className="header-menu-icon header-hidden-menu">&#9776;</div>
        </div>
        <div className="header-content">
          <div role="header-logo" className="header-options" style={{ paddingRight: "1rem" }}>
            <Link href="/">
              <Image
                className="header-imagem-de-logo"
                src="https://www.oboticario.com.co/cdn/shop/files/Brand-logo-new_1_360x.webp?v=1671562107"
                alt="logo da empresa"
                priority={true}
                width={500}
                height={300}
              />
            </Link>
          </div>
          <div role="header-option-1" className="header-options header-hidden-content">
            <Link href="/Productos" className="myLink">
              PRODUCTOS
            </Link>
          </div>
          <div role="header-option-2" className="header-options header-hidden-content">
            <Link href="/Regalos" className="myLink">
              REGALOS
            </Link>
          </div>
          <div role="header-option-3" className="header-options header-hidden-content">
            <Link href="/Marcas" className="myLink">
              MARCAS
            </Link>
          </div>
          <div role="header-option-4" className="header-options header-hidden-content">
            <Link href="/Promociones" className="myLink">
              PROMOCIONES
            </Link>
          </div>
          <div role="header-option-5" className="header-options header-hidden-content">
            <Link
              href="/Egeo"
              style={{
                border: "1px solid white",
                padding: "0.4rem",
                borderRadius: "5px",
              }}
              className="myLink"
            >
              EGEO
            </Link>
          </div>
          <div role="header-option-6" className="header-options header-hidden-content">
            <Link href="/Botifavoritos" className="myLink">
              BOTIFAVORITOS
            </Link>
          </div>
          <div role="header-option-7" className="header-options header-hidden-content">
            <Link href="/Lanzamientos" className="myLink">
              LANZAMIENTOS
            </Link>
          </div>
          <div role="header-option-8" className="header-options header-hidden-content">
            <Link href="/Sobrenotros" className="myLink">
              SOBRE NOSOTROS
            </Link>
          </div>
          <div role="header-option-9" className="header-options header-hidden-content">
            <Link href="/Sobrenotros" className="myLink">
              SOBRE NOSOTROS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
