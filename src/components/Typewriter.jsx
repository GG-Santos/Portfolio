import React, { useEffect } from 'react';

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
    const TYPING_SPEED = 100;
    const DELETION_SPEED = TYPING_SPEED / 2;
    const DELAY_BEFORE_DELETING = 1000;
    const SHORT_PAUSE = 500;
    let currentIndex = 0;
    let currentText = "";
    let isDeleting = false;

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

    function type() {
      const fullText = jobTitles[currentIndex];
      const nextIndex = (currentIndex + 1) % jobTitles.length;
      const nextText = jobTitles[nextIndex];
      const commonPrefix = getCommonPrefix(fullText, nextText);

      if (isDeleting) {
        if (currentText.length > commonPrefix.length) {
          currentText = currentText.slice(0, -1);
        } else {
          isDeleting = false;
          currentIndex = nextIndex;
          setTimeout(type, SHORT_PAUSE);
          return;
        }
      } else {
        if (currentText.length < fullText.length) {
          currentText += fullText.charAt(currentText.length);
        } else {
          isDeleting = true;
          setTimeout(type, DELAY_BEFORE_DELETING);
          return;
        }
      }

      typewriter.textContent = currentText;
      const currentSpeed = isDeleting ? DELETION_SPEED : TYPING_SPEED;
      setTimeout(type, currentSpeed);
    }

    type();
  }, []);
};
