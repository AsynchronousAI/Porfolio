import { useEffect } from "react";
import { NAMESPACE } from "@1chooo/activity-calendar/constants";

export const loadingAnimationName = `${NAMESPACE}--loading-animation`;

export function useLoadingAnimation(
  zeroColor: string,
  colorScheme: "light" | "dark",
) {
  useEffect(() => {
    const colorLoading = `oklab(from ${zeroColor} l a b)`;
    const colorActive =
      colorScheme === "light"
        ? `oklab(from ${zeroColor} calc(l * 0.96) a b)`
        : `oklab(from ${zeroColor} calc(l * 1.08) a b)`;

    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes ${loadingAnimationName} {
        0% {
          fill: ${colorLoading};
        }
        50% {
          fill: ${colorActive};
        }
        100% {
          fill: ${colorLoading};
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [zeroColor, colorScheme]);
}
