import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Glitch } from "./sfx/GlitchText"; // Import Glitch

export const HackerConsole = () => {
  const [txt, setTxt] = useState([
    "FORCE: XX0022. ENCRYPT://000.222.2345",
    "AUTH CODE: ALPHA-GAMMA-WABBY PRIORITY: [1]",
    "RETRY: [USER: G.A.SANTOS] AUTHENTICATION FAILURE",
    "Z:\\> /USERS/GGSANTOS/WABBY/PORTFOLIO/ EXECUTE --SKILLS-X",
    "===========================================================",
    "[PRIORITY 1] LOCAL // SCANNING NETWORK...",
    ">>> scanning active network interfaces...",
    ">>> NET_IF [eth0] STATUS: ACTIVE",
    ">>> NET_IF [wlan0] STATUS: STANDBY",
    ">>> PORT SCAN INITIATED...",
    ">>> PORT: [23.45.23.12:22] -- BACKDOOR IDENTIFIED",
    ">>> PORT: [13.66.23.12:443] -- SSL CERTIFICATE EXPIRED",
    ">>> PORT: [13.66.23.12:80] -- INSECURE HTTP FOUND",
    ">>> PORT: [23.90.45.13:22] -- POTENTIAL VULNERABILITY",
    ">>> PORT: [23.90.45.13:22] -- ACCESS POSSIBLE [EXPERIMENTAL]",
    ">>> UNSECURED NODE DETECTED [13.66.23.12]",
    ">>> INITIATING FINGERPRINTING...",
    ">>> HINT: SKILLS DETECTED [GAME DEV, UI/UX, 2D/3D]",
    ">>> OS IDENTIFIED: UNITY ENGINE",
    ">>> ACTIVE SESSION ENUMERATION INITIATED",
    "...",
    "...",
    "MNEMONIC.EXE -r -z -t 5",
    ">>> Initializing brute force sequence...",
    ">>> Progress: [---------------] Er%",
    "TASM: LOW-LEVEL MEMORY CHECK IN PROGRESS...",
    "TASM: COMPILING PAYLOAD MALWARE.SYS...",
    "TASM: [MOV AX, 0B800h] -- LOADING VIDEO MEMORY",
    "TASM: [MOV DI, 0000h] -- WRITING TO FRAMEBUFFER",
    "MEMORY: HEAP ALLOC: [20KB SUCCESS]",
    "MEMORY: STACK ALIGNMENT CORRECTED",
    ">>> locating potential vulnerabilities...",
    ">>> STATUS: [MULTIPLE VULNERABILITIES IDENTIFIED]",
    ">>> MCP/> DEPLOY CLU MODULE --ACTIVE",
    ">>> INJECTION INITIATED: CORE.DLL",
    ">>> PAYLOAD EXECUTED: [RAT_LOADER.DLL]",
    "SCAN: [ __ 0100.0000.0554.0080 ]",
    "SCAN: [ __ 0020.0000.0553.0080 ]",
    "SCAN: [ __ 0001.0000.0554.0550 ]",
    "SCAN: [ __ 0012.0000.0553.0030 ]",
    "SCAN: [ __ 0100.0000.0554.0080 ]",
    "SCAN: [ __ 0020.0000.0553.0080 ]",
    "EXEC: uploading exploit payload...",
    "EXEC: [ACTIVE] ...",
    ">>> Remote session initiated [CONNECTED]",
    ">>> Privileges escalated: [ADMIN ACCESS GRANTED]",
    ">>> SYSTEM MEMORY: BLOCKS EXPOSED [12,480/65,536]",
    ">>> INTERRUPT VECTOR PATCHED [INT 13h]",
    ">>> MALWARE MODULE: [KEYLOGGER | SPYWARE | WORM] ACTIVATED",
    ">>> HIDDEN PAYLOAD INJECTED INTO SEGMENT: [BFFF:0000]",
    ">>> EXECUTION COMPLETE: RETURN CODE [0]",
    ">>> INITIALIZING REMOTE SESSION...",
    ">>> CONNECTION ESTABLISHED [REMOTE NODE: HYDRA-9]",
    ">>> PRIVILEGE ESCALATION SUCCESSFUL [ADMIN]",
    ">>> SYSTEM BREACH DETECTED AT [23.45.12.9:443]",
    ">>> SYSTEM LOG FILES UPLOADED TO [REMOTE REPO]",
    ">>> HINT: MODULES DETECTED [DESIGNER | DEVELOPER | DEBUGGER]",
    ">>> MEMORY AUDIT: PATCHES APPLIED",
    ">>> FINALIZING EXECUTION...",
    ">>> TERMINAL LOCKED: ENTER NEXT INSTRUCTION",
    ">>> DEPLOYMENT COMPLETE",
    ">>> SYSTEM BREACH LOGGED AT 23.45.12.9:443",
    ">>> INITIALIZING REMOTE SESSION...",
    ">>> CONNECTION ESTABLISHED [REMOTE NODE: HYDRA-9]",
    "SCAN: [ __ 0100.0000.0554.0080 ]",
    "SCAN: [ __ 0020.0000.0553.0080 ]",
    "SCAN: [ __ 0001.0000.0554.0550 ]",
    "SCAN: [ __ 0012.0000.0553.0030 ]",
    "SCAN: [ __ 0100.0000.0554.0080 ]",
    "SCAN: [ __ 0020.0000.0553.0080 ]",
    ">>> SCAN REPORT: [27 CRITICAL ERRORS | 13 WARNINGS]",
    ">>> PRIVILEGE ESCALATION SUCCESSFUL [ADMIN]",
    ">>> SYSTEM BREACH DETECTED AT [23.45.12.9:443]",
    ">>> SYSTEM LOG FILES UPLOADED TO [REMOTE REPO]",
    ">>> HINT: MODULES DETECTED [MALWARE DEV | WEB DEV | UI/UX]",
    ">>> MEMORY AUDIT: PATCHES APPLIED",
    ">>> FINALIZING EXECUTION...",
    ">>> SESSION TERMINATED. STANDBY MODE ENABLED.",
    
  ]);
  const [displayedTxt, setDisplayedTxt] = useState("");
  const [currentLine, setCurrentLine] = useState(txt[21]); // Start with the 22nd line
  const [isTyping, setIsTyping] = useState(false);
  const consoleRef = useRef(null); // Add ref for the console element

  useEffect(() => {
    if (!isTyping) {
      const intervalID = setInterval(() => {
        setTxt((prevTxt) => {
          const newTxt = [...prevTxt];
          newTxt.push(newTxt.shift());
          setCurrentLine(newTxt[20]); // Set currentLine to the 22nd line
          return newTxt;
        });
      }, 2000); // Increased interval duration to 2000ms

      return () => clearInterval(intervalID);
    }
  }, [isTyping]);

  useEffect(() => {
    if (currentLine) {
      let charIndex = 0;
      setDisplayedTxt(currentLine[charIndex]); // Start with the first character
      setIsTyping(true);
      const typingInterval = setInterval(() => {
        charIndex++;
        setDisplayedTxt((prev) => prev + (currentLine[charIndex] || ""));
        if (charIndex === currentLine.length - 1) {
          clearInterval(typingInterval);
          setIsTyping(false);
          gsap.fromTo(
            ".console-text",
            { opacity: 0.5 }, // Changed initial opacity to 0.5
            { opacity: 1, duration: 1, stagger: 0.2 } // Increased duration and stagger
          );
          // Scroll to the bottom of the console
          if (consoleRef.current) {
            consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
          }
        }
      }, 100); // Typing speed

      return () => clearInterval(typingInterval);
    }
  }, [currentLine]);

  useEffect(() => {
    const glitchElements = document.querySelectorAll(".console-text-static");
    const glitchInstances = [];
    glitchElements.forEach((element, index) => {
      const glitch = new Glitch(element, index, 5, 2000, 200, 4000); // Increased intervals
      glitch.init();
      glitch.glitch();
      glitchInstances.push(glitch);
    });

    return () => {
      glitchInstances.forEach(glitch => glitch.stop());
    };
  }, [txt]);

  return (
    <div id="console" className="pl-6 pt-5 text-xs" ref={consoleRef}>
      {txt.slice(0, 20).map((line, index) => ( // Display the first 21 lines
        <p key={index} className="console-text console-text-static">
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