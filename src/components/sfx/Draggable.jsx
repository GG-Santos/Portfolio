import React, { useEffect } from "react";

export const Draggable = () => {
  useEffect(() => {
    const dragElement = (elmnt) => {
      let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

      const dragMouseDown = (e) => {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
      };

      const elementDrag = (e) => {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
      };

      const closeDragElement = () => {
        document.onmouseup = null;
        document.onmousemove = null;
      };

      elmnt.onmousedown = dragMouseDown;
    };

    const elmnt = document.getElementById("CLI");
    if (elmnt) {
      dragElement(elmnt);
    }

    return () => {
      document.onmouseup = null;
      document.onmousemove = null;
    };
  }, []);
};
