import React, { useEffect } from "react";

export const GlitchHover = () => {
  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const initHoverEffect = () => {
      const textElements = document.querySelectorAll(".text-hack-hover-effect");

      textElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
          element.style.setProperty("--hover-width", "100%");
          element.style.setProperty("--hover-left", "0");
          element.style.color = "#ffffff"; // Change text color to white on hover
        });

        element.addEventListener("mouseleave", () => {
          element.style.setProperty("--hover-width", "0");
          element.style.setProperty("--hover-left", "100%");
          element.style.color = ""; // Reset text color on mouse leave

          element.addEventListener("transitionend", function resetProperties(event) {
            if (event.propertyName === "width" || event.propertyName === "left") {
              element.style.setProperty("--hover-left", "0");
              element.style.setProperty("--hover-width", "0");
              element.removeEventListener("transitionend", resetProperties);
            }
          });
        });
      });
    };

    const initHackerTypeEffect = () => {
      const textElements = document.querySelectorAll(".text-hack-hover-effect");

      textElements.forEach((textElement) => {
        const dataValue = textElement.dataset.value;

        textElement.onmouseover = () => {
          let iteration = 0;
          const animateText = () => {
            textElement.innerText = dataValue
              .split("")
              .map((letter, index) =>
                index < iteration
                  ? dataValue[index]
                  : letters[Math.floor(Math.random() * 26)]
              )
              .join("");

            if (iteration < dataValue.length) {
              iteration += 1 / 3;
              requestAnimationFrame(animateText);
            }
          };
          animateText();
        };

        textElement.onmouseleave = () => {
          let iteration = textElement.innerText.length;
          const reverseAnimateText = () => {
            textElement.innerText = dataValue
              .split("")
              .map((letter, index) =>
                index < iteration
                  ? dataValue[index]
                  : letters[Math.floor(Math.random() * 26)]
              )
              .join("");

            if (iteration > 0) {
              iteration -= 1 / 3;
              requestAnimationFrame(reverseAnimateText);
            } else {
              textElement.innerText = dataValue;
            }
          };
          reverseAnimateText();
        };
      });
    };

    initHoverEffect();
    initHackerTypeEffect();
  }, []);
};
