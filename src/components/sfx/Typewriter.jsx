import React, { useEffect } from 'react';
import { gsap } from 'gsap';

export const Typewriter = () => {
  useEffect(() => {
    const typewriter = document.getElementById("typewriter");
    const jobTitles = [
      "Game_Developer",
      "Full_Stack_Developer",
      "Concept_Artist",
      "2D_Art_Generalist",
      "Technical_Artist",
      "3D_Art_Generalist",
      "Graphic_Designer",
      "UI/UX_Designer"
    ];
    const TYPING_SPEED = 0.1; // seconds per character
    const DELETION_SPEED = TYPING_SPEED / 2;
    const DELAY_BEFORE_DELETING = 1; // seconds
    const SHORT_PAUSE = 0.5; // seconds
    let currentIndex = 0;
    let isDeleting = false;

    function type() {
      const fullText = jobTitles[currentIndex];
      const nextIndex = (currentIndex + 1) % jobTitles.length;
      const nextText = jobTitles[nextIndex];
      const commonPrefix = getCommonPrefix(fullText, nextText);

      if (isDeleting) {
        if (typewriter.textContent.length > commonPrefix.length) {
          gsap.to(typewriter, { text: typewriter.textContent.slice(0, -1), duration: DELETION_SPEED, onComplete: type });
        } else {
          isDeleting = false;
          currentIndex = nextIndex;
          gsap.delayedCall(SHORT_PAUSE, type);
        }
      } else {
        if (typewriter.textContent.length < fullText.length) {
          gsap.to(typewriter, { text: fullText.slice(0, typewriter.textContent.length + 1), duration: TYPING_SPEED, onComplete: type });
        } else {
          isDeleting = true;
          gsap.delayedCall(DELAY_BEFORE_DELETING, type);
        }
      }
    }

    function getCommonPrefix(a, b) {
      let length = Math.min(a.length, b.length);
      let prefix = "";
      for (let i = 0; i < length; i++) {
        if (a[i] === b[i]) {
          prefix += a[i];
        } else {
          break;
        }
      }
      return prefix;
    }

    type();
  }, []);
};
