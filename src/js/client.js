'use strict';

class ExtensionClient {
  constructor() {
		$(document).ready(function() {
			var links = $('a');
			console.log(links);
		});
  }
}

new ExtensionClient();