'use strict';

class ExtensionClient {
  constructor() {
		$(document).ready(function() {
			function addHoverEvents() {
				$('a._52c6').hover((e) => {
					console.log(e.target.href);
				});
				setTimeout(addHoverEvents, 10000);
			}
			addHoverEvents();
		});
  }
}

new ExtensionClient();