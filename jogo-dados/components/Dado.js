import Image from "next/image";

export default function Dado({ valor }) {
    const v = parseInt(valor);

    if ( v < 1 || v > 6 ) {
        return <div className="dado flex flex-col items-center">Valor inválido</div>;
    } else {
        return (
        <div className="dado flex flex-col items-center">
            <Image 
            src={`/dados/Dado${v}.png`} 
            alt={`Dado face ${v}`} 
            width={400} 
            height={400}    />
        </div>
    );
    }
}