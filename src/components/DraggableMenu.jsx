import React, { useEffect, useState } from 'react';
import { GlitchHover } from './sfx/GlitchHover';
import { Draggable } from './sfx/Draggable';

export const DraggableMenu = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const updateScroller = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const top = Math.round((scrollY / (documentHeight - viewportHeight)) * 100);
      setScrollPercent(top);
    };

    window.addEventListener('scroll', updateScroller);
    return () => window.removeEventListener('scroll', updateScroller);
  }, []);

  return (
    <section id="CLI" className="fixed" style={{ zIndex: 90 }}>
      <Draggable />
      <GlitchHover />
      <div className="CLI-Container" style={{ width: '18rem', padding: '1rem' }}>
        <div id="CLIHeader">
          <p className="gradient-text-animation animated-text-pink-code">
            WABBY PORTFOLIO VERSION ALPHA
          </p>
          <p>COPYRIGHT(C) 2025 WAB N' WAB INC.</p>
          <p>
            ALL RIGHTS RESERVED.
            <a style={{ color: 'cadetblue' }}> Draggable</a>
          </p>
        </div>
        <div>
          <br />
          <p className="text-white-code">
            PS X:\SKILLSTACK\<span className="scroll-percent">{scrollPercent}%</span>
          </p>
          <p className="text-grey-code">
            &gt;&gt;<span
              className="text-hack-hover-effect cursor-remove gradient-text-animation animated-text-purple-code"
              data-value="DESIGNER"
            >
              DESIGNER
            </span>
          </p>
          <p className="text-grey-code">
          &gt;&gt;<span
              className="text-hack-hover-effect cursor-remove gradient-text-animation animated-text-cyan-code"
              data-value="DEVELOPER"
            >
              DEVELOPER
            </span>
          </p>
          <p className="text-grey-code">
            &gt;&gt;<span
              className="text-hack-hover-effect cursor-remove gradient-text-animation animated-text-yellow-code"
              data-value="RESPONDER"
            >
              RESPONDER
            </span>
          </p>
          <p>
          &gt;&gt; <span className="text-white-code blink bold">_</span>
          </p>
        </div>
      </div>
    </section>
  );
}