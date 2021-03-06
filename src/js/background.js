'use strict';

class ExtensionBackground {
	constructor() {
		// Quando estiver instalando/atualizando:
		chrome.runtime.onInstalled.addListener(this.events);
		chrome.extension.getBackgroundPage().console.log('Execute Background');
	}

	events() {
		// Remover as regras de mudança de página:
		chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
			// Para adicionar a regra abaixo:
			chrome.declarativeContent.onPageChanged.addRules([{
				// Se:
				conditions: [
					new chrome.declarativeContent.PageStateMatcher({
						// A url da página conter:
						pageUrl: { urlContains: 'facebook.com' },
					}) ],
				// Nesse caso, mostramos a Page Action da extensão:
				actions: [ new chrome.declarativeContent.ShowPageAction() ]
			}]);
		});
	}
}

new ExtensionBackground();

