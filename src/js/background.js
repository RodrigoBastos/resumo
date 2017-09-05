'use strict';

class ExtensionBackground {
  constructor() { this.events(); }

  events() {
    chrome.browserAction.onClicked.addListener((tab) => {
      alert('Resumo de links!');
    });
  }
}

new ExtensionBackground();