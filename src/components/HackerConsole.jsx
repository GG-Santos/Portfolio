import React, { useState, useEffect } from "react";
import gsap from "gsap";

export const HackerConsole = () => {
  const [txt, setTxt] = useState([
    "FORCE: XX0022. ENCYPT://000.222.2345",
    "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
    "RETRY: GINO ARWIN SANTOS",
    "Z:> /GGSANTOS/WABBY/POTFOLIO/ EXECUTE -SKILLS 0",
    "================================================",
    "Priority 1 // local / scanning...",
    "scanning ports...",
    "BACKDOOR FOUND (23.45.23.12.00000000)",
    "BACKDOOR FOUND (13.66.23.12.00110000)",
    "BACKDOOR FOUND (13.66.23.12.00110044)",
    "...",
    "...",
    "BRUTE.EXE -r -z",
    "...locating vulnerabilities...",
    "...vulnerabilities found...",
    "MCP/> DEPLOY CLU",
    "SCAN: __ 0100.0000.0554.0080",
    "SCAN: __ 0020.0000.0553.0080",
    "SCAN: __ 0001.0000.0554.0550",
    "SCAN: __ 0012.0000.0553.0030",
    "SCAN: __ 0100.0000.0554.0080",
    "SCAN: __ 0020.0000.0553.0080",
    
  ]);
  const [displayedTxt, setDisplayedTxt] = useState("");
  const [currentLine, setCurrentLine] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!isTyping) {
      const intervalID = setInterval(() => {
        setTxt((prevTxt) => {
          const newTxt = [...prevTxt];
          newTxt.push(newTxt.shift());
          setCurrentLine(newTxt[0]);
          return newTxt;
        });
      }, 1000); // Further increased interval duration to 2000ms

      return () => clearInterval(intervalID);
    }
  }, [isTyping]);

  useEffect(() => {
    if (currentLine) {
      let charIndex = 0;
      setDisplayedTxt("");
      setIsTyping(true);
      const typingInterval = setInterval(() => {
        setDisplayedTxt((prev) => prev + (currentLine[charIndex] || ""));
        charIndex++;
        if (charIndex === currentLine.length) {
          clearInterval(typingInterval);
          setIsTyping(false);
          gsap.fromTo(
            ".console-text",
            { opacity: 0.5 }, // Changed initial opacity to 0.5
            { opacity: 1, duration: 1, stagger: 0.2 } // Increased duration and stagger
          );
        }
      }, 100); // Typing speed

      return () => clearInterval(typingInterval);
    }
  }, [currentLine]);

  return (
    <div id="console" className="pl-6 pt-5 text-xs">
      {txt.slice(1).map((line, index) => (
        <p key={index} className="console-text">
          {line}
        </p>
      ))}
      <p className="console-text">{displayedTxt}<span className="cursor">|</span></p>
    </div>
  );
};

// Add CSS for blinking cursor
const style = document.createElement('style');
style.innerHTML = `
  .cursor {
    display: inline-block;
    width: 10px;
    background-color: #fff;
    animation: blink 1s step-end infinite;
  }
  @keyframes blink {
    from, to {
      background-color: transparent;
    }
    50% {
      background-color: #fff;
    }
  }
`;
document.head.appendChild(style);