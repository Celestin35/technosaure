import Button from "./Button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-tec-black text-tec-white">
 
      <div className="container py-10 md:py-15 flex flex-col md:flex-row justify-between gap-10 md:gap-0">
        {/* Menu  */}
        <div> 
          <h3 className="heading-3 mb-3 uppercase">Pages</h3>
          <ul className="flex flex-col justify-between gap-1.5 text-tec-white uppercase">
            <li>
              <Link href="#programmation">Programmation</Link>
            </li>
            <li>
              <Link href="/billeterie#infos-pratiques">Infos pratiques</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        {/* Bouton billeterie  */}
        
        <Button href="/billeterie" variant="secondary">
            <span>Reserver</span>
        </Button>
        
        {/* Réseaux sociaux  */}
        <div>
          <h3 className="heading-3 mb-3 uppercase">Suivez-nous</h3>
          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="https://www.youtube.com/"
              aria-label="YouTube"
              className="inline-flex h-9 w-9 items-center justify-center bg-tec-white text-tec-black transition-opacity hover:opacity-80"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M23.498 6.186a2.999 2.999 0 0 0-2.112-2.122C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.386.564A2.999 2.999 0 0 0 .502 6.186C0 8.075 0 12 0 12s0 3.925.502 5.814a2.999 2.999 0 0 0 2.112 2.122C4.495 20.5 12 20.5 12 20.5s7.505 0 9.386-.564a2.999 2.999 0 0 0 2.112-2.122C24 15.925 24 12 24 12s0-3.925-.502-5.814ZM9.75 15.5v-7l6 3.5-6 3.5Z" />
              </svg>
            </a>
            <a
              href="https://www.pinterest.com/"
              aria-label="Pinterest"
              className="inline-flex h-9 w-9 items-center justify-center bg-tec-white text-tec-black transition-opacity hover:opacity-80"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.165 2.55 7.737 6.184 9.212-.03-.705-.006-1.548.168-2.32.188-.808 1.25-5.293 1.25-5.293s-.318-.638-.318-1.58c0-1.48.86-2.586 1.93-2.586.91 0 1.35.684 1.35 1.503 0 .915-.583 2.283-.884 3.553-.25 1.06.53 1.923 1.57 1.923 1.884 0 3.153-2.418 3.153-5.29 0-2.18-1.47-3.81-4.14-3.81-3.01 0-4.89 2.25-4.89 4.76 0 .865.254 1.476.65 1.95.183.22.208.31.14.56-.05.185-.163.64-.21.82-.068.25-.278.34-.512.25-1.42-.58-2.08-2.15-2.08-3.92 0-2.91 2.46-6.39 7.31-6.39 3.9 0 6.47 2.82 6.47 5.86 0 4.01-2.23 7-5.53 7-1.1 0-2.14-.6-2.5-1.28 0 0-.59 2.34-.71 2.78-.21.79-.62 1.59-1.01 2.23.9.27 1.86.41 2.85.41 5.523 0 10-4.477 10-10S17.523 2 12 2Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center bg-tec-white text-tec-black transition-opacity hover:opacity-80"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7 3C4.79 3 3 4.79 3 7v10c0 2.21 1.79 4 4 4h10c2.21 0 4-1.79 4-4V7c0-2.21-1.79-4-4-4H7Zm10 2c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h10Zm-5 2.5A4.5 4.5 0 1 0 16.5 12 4.505 4.505 0 0 0 12 7.5Zm0 2A2.5 2.5 0 1 1 9.5 12 2.503 2.503 0 0 1 12 9.5ZM17 6.25a1.25 1.25 0 1 0 1.25 1.25A1.25 1.25 0 0 0 17 6.25Z" />
              </svg>
            </a>
          </div>
        </div>
        {/* Logo  */}
        <div className="w-fit">
          <p className="font-bungee text-[20px] md:text-3xl uppercase text-tec-white">
            TECHNOSAURE
          </p>
        </div>
      </div>
      {/* Logo  */}
      <div className="py-1.5 md:py-2.5 flex items-center justify-center bg-tec-white text-tec-black">
        <p className="text-sm text-center w-fit uppercase">
          &copy; Technosaure {new Date().getFullYear()} FRANCE
        </p>
      </div>
    </footer>
  );
}
