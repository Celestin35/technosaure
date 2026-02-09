"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";

type ButtonVariant = "primary" | "secondary" | "tertiary";

type ButtonProps = {
  href?: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
  classList?: string;
};

export default function Button({
  href = "/billeterie",
  variant = "primary",
  children,
  classList = "",
}: ButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const baseClass =
    "bg-tec-pink text-tec-black font-gothic border-2 border-tec-black text-center uppercase flex items-center w-fit";

  const variants: Record<ButtonVariant, string> = {
    primary: "px-8 py-2 justify-center", // Texte uniquement
    secondary: "px-5 py-2 gap-2 justify-between", // Texte + icone
    tertiary: "p-2.5 gap-2 justify-between", // Icône uniquement
  };

  return (
    <Link
      ref={buttonRef}
      className={`${baseClass} ${variants[variant]} ${classList}`}
      href={href}
      onMouseEnter={() => {
        if (!buttonRef.current) return;
        gsap.to(buttonRef.current, {
          backgroundColor: "#F2F1F1", // Couleur de survol
          duration: 0.2,
          ease: "power2.out",
        });
      }}
      onMouseLeave={() => {
        if (!buttonRef.current) return;
        gsap.to(buttonRef.current, {
          backgroundColor: "#FD8EAD", // Couleur de fond initiale
          duration: 0.2,
          ease: "power2.out",
        });
      }}
    >
      {children}
    </Link>
  );
}
