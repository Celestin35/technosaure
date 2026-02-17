"use client";

import Button from "./Button";
import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import { useLayoutEffect, useRef } from "react";
import { animateSplitText } from "../../AnimationsHelper/Animations";

gsap.registerPlugin(SplitText);

export default function BannerTop() {
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const text = textRef.current;
    if (!text) return;

    let split: SplitText | null = null;
    const ctx = gsap.context(() => {
      split = animateSplitText({
        elements: [text],
      });

      if (buttonRef.current) {
        gsap.fromTo(
          buttonRef.current,
          { y: 20, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.3,
            ease: "power2.out",
          },
        );
      }
    });

    return () => {
      split?.revert();
      ctx.revert();
    };
  }, []);

  return (
    <div className="container flex md:hidden justify-center items-center relative z-20 gap-4 text-center py-5 ">
        <p
          ref={textRef}
          className="text-tec-white text-sm font-lexend opacity-0 invisible"
        >
          Retrouver la programmation ici
        </p>
        <div ref={buttonRef} className="opacity-0 invisible">
          <Button href="#programmation" variant="tertiary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            width="16px"
            height="16px"
            viewBox="0 0 1920 1920"
          >
            <path
              d="M849.973.011v1497.931L486.9 1134.871 331 1290.772 960.228 1920l629.228-629.228-155.901-155.901-363.071 363.071V.011z"
              fillRule="evenodd"
            />
          </svg>
          </Button>
        </div>
      </div>
  );
}
