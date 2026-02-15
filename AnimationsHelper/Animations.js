import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText";

let registered = false;

function ensurePlugins() {
  if (!registered) {
    gsap.registerPlugin(SplitText);
    registered = true;
  }
}

// Helper d'animation pour une apparition du texte
export function animateSplitText({
  elements,
  type = "words",
  y = 15,
  duration = 0.6,
  ease = "power2.out",
  stagger = 0.02,
  fromAlpha = 0,
}) {
  ensurePlugins();

  const split = new SplitText(elements, { type });
  const targets = type.includes("chars") ? split.chars : split.words;

  gsap.set(elements, { autoAlpha: 1, visibility: "visible" });
  gsap.from(targets, {
    y,
    autoAlpha: fromAlpha,
    duration,
    ease,
    stagger,
  });

  return split;
}