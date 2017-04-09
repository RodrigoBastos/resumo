'use strict';

class ExtensionBackground {
  constructor() { this.events(); }

  events() {
    chrome.browserAction.onClicked.addListener((tab) => {
      alert('It is working');
    });
  }
}

new ExtensionBackground();