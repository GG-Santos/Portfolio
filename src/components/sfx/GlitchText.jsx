const chars = "☺Σ×Π#-_¯—→↓↑←0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";

class Glitch {
  constructor(selector, index, numberOfGlitchedLetter, timeGlitch, timePerLetter, timeBetweenGlitch) {
    this.selector = selector;
    this.index = index;
    this.numberOfGlitchedLetter = numberOfGlitchedLetter;
    this.innerText = "";
    this.charArray = [];
    this.charIndex = [];
    this.timeGlitch = timeGlitch;
    this.timeBetweenGlitch = timeBetweenGlitch;
    this.timePerLetter = timePerLetter;
    this.maxCount = Math.floor(this.timeGlitch / this.timePerLetter);
    this.count = 0;
    this.interval = null;
  }

  init() {
    this.innerText = this.selector.innerText;
    this.charArray = this.innerText.split("");
    if (this.numberOfGlitchedLetter === undefined || this.numberOfGlitchedLetter > this.innerText.length) {
      this.numberOfGlitchedLetter = this.innerText.length;
    }
    this.defineCharIndexToRandomize();
  }

  defineCharIndexToRandomize() {
    this.charIndex = [];
    for (let i = 0; i < this.numberOfGlitchedLetter; i++) {
      let randCharIndex = Math.floor(Math.random() * this.charArray.length);
      this.charIndex.push(randCharIndex);
    }
  }

  randomize() {
    let randomString = Array.from(this.charArray);
    for (let i = 0; i < this.numberOfGlitchedLetter; i++) {
      let randIndex = Math.floor(Math.random() * chars.length);
      let randCharIndex = this.charIndex[i];
      if (randomString[randCharIndex] !== ' ') {
        randomString[randCharIndex] = chars[randIndex];
      }
    }
    this.selector.innerText = randomString.join("");
  }

  update() {
    if (this.count >= this.maxCount - 1) {
      this.selector.innerText = this.innerText;
      this.defineCharIndexToRandomize();
      let ctx = this;
      setTimeout(function () {
        ctx.count = 0;
      }, this.timeBetweenGlitch);
    } else {
      this.randomize();
      this.count++;
    }
  }

  glitch() {
    let ctx = this;
    this.interval = setInterval(function () {
      ctx.update();
    }, this.timePerLetter);
  }

  stop() {
    clearInterval(this.interval);
  }
}

export { Glitch };
