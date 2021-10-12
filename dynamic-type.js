class DynamicType extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `<style>
      :host::after {content: '|';animation: blink 0.75s infinite;}:host {word-break: break-all; display: inline;} 
      @keyframes blink {0% { opacity: 1;}50% {opacity: 0;}100% {opacity: 1;}}
    </style>`;
    this.words = (this.getAttribute('words') || '').split(';');
    this.loop = this.getAttribute('loop') === 'true' || this.getAttribute('loop') === true;
    this.colors = (this.getAttribute('colors') || '').split(';');
    this.typeDelay = Number(this.getAttribute('typeDelay') || 250);
    this.deleteDelay = Number(this.getAttribute('deleteDelay') || 100);
    this.deleteStartAfter = Number(this.getAttribute('deleteStartAfter') || 750);
    this.index = 0;
    this.init();
  }

  async init() {
    for (this.index; this.index < this.words.length; this.index++) {
      const isLastWord = this.index === this.words.length - 1;
      const word = this.words[this.index];
      const color = this.colors[this.index % this.colors.length];
      if (color) this.style.color = color;
      await this.animateWord(word, isLastWord)
      if (this.loop && isLastWord) {
        this.index = -1; // reset index for infinte loop
      }
    }
  }

  async animateWord(word, isLastWord) {
    for (let i = 0; i < word.length; i++) {
      await this.promisifyCallBack(
        () => this.shadowRoot.innerHTML += word.charAt(i),
        this.typeDelay
      );
    }
    if (isLastWord && !this.loop) {
      return this.classList.add('dynamic-type-animation-end')
    };
    await this.promisifyCallBack(() => { }, this.deleteStartAfter);
    if (!isLastWord || (isLastWord && this.loop)) {
      for (let i = word.length; i > 0; i--) {
        await this.promisifyCallBack(
          () => this.shadowRoot.innerHTML = this.shadowRoot.innerHTML.slice(0, -1),
          this.deleteDelay
        );
      }
    }
  }

  promisifyCallBack(syncCallBack, delay) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        syncCallBack();
        res();
      }, delay)
    })
  }
}
window.customElements.define('dynamic-type', DynamicType);