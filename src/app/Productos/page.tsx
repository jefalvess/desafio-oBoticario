import "../../styles/globals.css";

import  Link  from "next/link";
import Image from "next/image";


export default function Productos(){
  return (
    <div>
      <Image
        src="https://www.oboticario.com.co/cdn/shop/files/DesktopMeca-5-11-pe.jpg?v=1693440763&width=3000"
        alt="A beautiful landscape"
        priority={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        fill
      />
        <br/>
      <Link href="/"> 
        <button className="back-button">Back home</button>
      </Link>

    </div>
  );
}