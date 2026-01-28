import Link from "next/link";
import Button from "./Button"

export default function Navbar() {
  return (
    <div className="container mx-auto flex items-center justify-between relative z-10">
      <div className="w-fit">
        <p className="font-bungee text-[28px] md:text-4xl uppercase text-tec-white">
          TECHNOSAURE
        </p>
      </div>
      <div className="block md:hidden">
        {/* <svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="1" x2="30" y2="1" stroke="#F2F1F1" stroke-width="2"/>
            <line x1="10" y1="8" x2="30" y2="8" stroke="#F2F1F1" stroke-width="2"/>
            <line y1="15" x2="30" y2="15" stroke="#F2F1F1" stroke-width="2"/>
        </svg> */}
      </div>
      <div className="hidden md:flex items-center justify-between gap-5">
        <ul className="flex items-center justify-between gap-5 text-tec-white">
            <li><Link href="#programmation">Programmation</Link></li>
            <li><Link href="/billeterie#infos">Infos pratiques</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
        <Button />
      </div>
    </div>
  );
}
