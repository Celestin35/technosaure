"use client";

import Link from "next/link";
import { useRef, useLayoutEffect } from "react";
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
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const baseClass =
    "border-2 border-tec-black text-center uppercase flex items-center w-fit relative";

  const variants: Record<ButtonVariant, string> = {
    primary: "px-8 py-2 justify-center",
    secondary: "px-5 py-2 gap-2 justify-between",
    tertiary: "p-2.5 gap-2 justify-between",
  };

  useLayoutEffect(() => {
    if (!buttonRef.current) return;
    const growthDiv = buttonRef.current?.querySelector(".growthDiv") as HTMLDivElement;
    const buttonContent = buttonRef.current?.querySelector(".childrenButtonContainer") as HTMLDivElement;
    const buttonContentSvg = buttonContent?.querySelector("svg") as SVGElement | null;

    const ctx = gsap.context(() => {
      // Ensure initial state is always collapsed
      gsap.set(growthDiv, { width: 0, rotate: 0 });
      tlRef.current = gsap
        .timeline({ paused: true })
        .to(growthDiv, {
          width: "100%",
          rotate: 0,
          duration: 0.3,
          ease: "power2.out",
        }).to(buttonContent, {
          color: "#F2F1F1",
          
          borderColor: "#F2F1F1",
          duration: 0.2,
          ease: "power2.out",
        }, "<").to(buttonContentSvg, {
          fill: "#F2F1F1",
          duration: 0.2,
          ease: "power2.out",
        }, "<")
        ;
    }, buttonRef);
    

    return () => ctx.revert();
  }, []);

  return (
    <Link
      ref={buttonRef}
      href={href}
      className="relative z-10 bg-tec-pink text-tec-black font-gothic overflow-hidden h-fit w-fit"
      onMouseEnter={() => tlRef.current?.play()}
      onMouseLeave={() => tlRef.current?.reverse()}
    >
      <div
        className="hidden sm:block growthDiv absolute bottom-0 left-0 h-full bg-tec-black z-20 pointer-events-none"
        style={{ width: 0 }}
      ></div>
      <div className={`${baseClass} ${variants[variant]} ${classList} sm:childrenButtonContainer relative z-30`}>{children}</div>
    </Link>
  );
}
