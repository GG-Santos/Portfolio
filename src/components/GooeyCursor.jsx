import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const GooeyCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const amount = 20;
    const sineDots = Math.floor(amount * 0.3);
    const width = 26;
    const idleTimeout = 150;
    let lastFrame = 0;
    let mousePosition = { x: 0, y: 0 };
    let dots = [];
    let timeoutID;
    let idle = false;

    class Dot {
      constructor(index = 0) {
        this.index = index;
        this.anglespeed = 0.05;
        this.x = 0;
        this.y = 0;
        this.scale = 1 - 0.05 * index;
        this.range = width / 2 - (width / 2) * this.scale + 2;
        this.limit = width * 0.75 * this.scale;
        this.element = document.createElement("span");
        gsap.set(this.element, { scale: this.scale });
        cursor.appendChild(this.element);
      }

      lock() {
        this.lockX = this.x;
        this.lockY = this.y;
        this.angleX = Math.PI * 2 * Math.random();
        this.angleY = Math.PI * 2 * Math.random();
      }

      draw(delta) {
        if (!idle || this.index <= sineDots) {
          gsap.set(this.element, { x: this.x, y: this.y });
        } else {
          this.angleX += this.anglespeed;
          this.angleY += this.anglespeed;
          this.y = this.lockY + Math.sin(this.angleY) * this.range;
          this.x = this.lockX + Math.sin(this.angleX) * this.range;
          gsap.set(this.element, { x: this.x, y: this.y });
        }
      }
    }

    function startIdleTimer() {
      timeoutID = setTimeout(goInactive, idleTimeout);
      idle = false;
    }

    function resetIdleTimer() {
      clearTimeout(timeoutID);
      startIdleTimer();
    }

    function goInactive() {
        idle = true;
        dots.forEach(dot => dot.lock());
    }

    function buildDots() {
        for (let i = 0; i < amount; i++) {
            dots.push(new Dot(i));
        }
    }

    const onMouseMove = (event) => {
      mousePosition.x = event.clientX - width / 2;
      mousePosition.y = event.clientY - width / 2;
      resetIdleTimer();
    };

    const onTouchMove = (event) => {
      mousePosition.x = event.touches[0].clientX - width / 2;
      mousePosition.y = event.touches[0].clientY - width / 2;
      resetIdleTimer();
    };

    const render = (timestamp) => {
      const delta = timestamp - lastFrame;
      positionCursor(delta);
      lastFrame = timestamp;
      requestAnimationFrame(render);
    };

    const positionCursor = (delta) => {
      let x = mousePosition.x;
      let y = mousePosition.y;
      dots.forEach((dot, index, dots) => {
        let nextDot = dots[index + 1] || dots[0];
        dot.x = x;
        dot.y = y;
        dot.draw(delta);
        if (!idle || index <= sineDots) {
          const dx = (nextDot.x - dot.x) * 0.35;
          const dy = (nextDot.y - dot.y) * 0.35;
          x += dx;
          y += dy;
        }
      });
    };

    function init() {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("touchmove", onTouchMove);
      lastFrame += new Date();
      buildDots();
      render();
    }

    init();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      dots.forEach((dot) => dot.element.remove());
      dots = [];
    };
  }, []);

  return (
    <div id="ink-cursor" className="ink-cursor" ref={cursorRef}>
      <svg xmlns="http://www.w3.org/2000/svg" className="goo" version="1.1" width="100%">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur"></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15"
              result="goo"
            ></feColorMatrix>
            <feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite>
          </filter>
        </defs>
      </svg>
    </div>
  );
};
