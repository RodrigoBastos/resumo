'use strict';

class ExtensionClient {
  constructor() {
		$(document).ready(function() {
			var links = $('._52c6');
			_.forEach(links, (link) => {
				console.log(link.href);
			});
		});
  }
}

new ExtensionClient();