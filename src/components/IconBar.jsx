import React from 'react';
import { Typewriter } from './sfx/Typewriter';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './ui/tooltip';
import { Magnetic } from './sfx/Magnetic';

export const IconBar = () => {
  return (
    <TooltipProvider>
      <footer className="fixed bottom-0 left-0 right-0 flex justify-between items-center p-1" style={{ zIndex: 90 }}>
        <Typewriter />
        <section id="hide-small" className="text-xs" style={{ marginLeft: '1rem' }}>
          <p className="text-grey-code"> &gt;&gt;<span> </span>
            <span id="typewriter-container" className="inline-block" style={{ width: '200px' }}>
              <span id="typewriter" className="NavText">Game_Developer</span>
              <span className="text-purple-code blink bold">_</span>
            </span>
          </p>
        </section>

        <section id="button" className="flex items-center space-x-4 absolute-center">
          <ul className="icon-wrapper">
            <Magnetic>
              <li className="icon icon_item">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span>
                      <a href="https://www.linkedin.com/in/GG-santos/" className="icon w-6 h-6">
                        <img src="/src/assets/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
                      </a>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent sideOffset={2}>Linkedin</TooltipContent>
                </Tooltip>
              </li>
            </Magnetic>
            <Magnetic>
              <li className="icon icon_item">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span>
                      <a href="https://github.com/GG-Santos" className="icon w-6 h-6">
                        <img src="/src/assets/icons/github.svg" alt="GitHub" className="w-5 h-5" />
                      </a>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent sideOffset={2}>Github</TooltipContent>
                </Tooltip>
              </li>
            </Magnetic>
            <Magnetic>
              <li className="icon icon_item">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span>
                      <a href="https://codepen.io/GG-Santos" className="icon w-6 h-6">
                        <img src="/src/assets/icons/codepen.svg" alt="Codepen" className="w-5 h-5" />
                      </a>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent sideOffset={2}>Codepen</TooltipContent>
                </Tooltip>
              </li>
            </Magnetic>
            <Magnetic>
              <li className="icon icon_item">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span>
                      <a href="https://www.behance.net/GG-santos" className="icon w-6 h-6">
                        <img src="/src/assets/icons/behance.svg" alt="Behance" className="w-5 h-5" />
                      </a>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent sideOffset={2}>Behance</TooltipContent>
                </Tooltip>
              </li>
            </Magnetic>
            <Magnetic>
              <li className="icon icon_item">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span>
                      <a href="#" className="icon w-6 h-6">
                        <img src="/src/assets/icons/artstation.svg" alt="ArtStation" className="w-5 h-5" />
                      </a>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent sideOffset={2}>Artstation</TooltipContent>
                </Tooltip>
              </li>
            </Magnetic>
            <Magnetic>
              <li className="icon icon_item">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span>
                      <a href="#" className="icon w-6 h-6">
                        <img src="/src/assets/icons/patreon.svg" alt="Patreon" className="w-5 h-5" />
                      </a>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent sideOffset={2}>Patreon</TooltipContent>
                </Tooltip>
              </li>
            </Magnetic>
          </ul>
        </section>

        <section className="flex items-center space-x-4 icon-wrapper right-aligned" style={{ marginRight: '1rem' }}>
          <Magnetic>
            <li className="icon icon-right icon_item">
              <Tooltip>
                <TooltipTrigger asChild>
                  <span>
                    <a href="mailto:ggasntos_0415@proton.me" className="icon w-6 h-6">
                      <img src="/src/assets/icons/protonmail.svg" alt="ProtonMail" className="w-5 h-5" />
                    </a>
                  </span>
                </TooltipTrigger>
                <TooltipContent sideOffset={2}>Proton</TooltipContent>
              </Tooltip>
            </li>
          </Magnetic>
        </section>
      </footer>
    </TooltipProvider>
  );
};
