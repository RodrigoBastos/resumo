'use strict';

class ExtensionClient {
  constructor() {
		$(document).ready(function() {
			function addMouseEvents() {
				$('a._52c6').mouseover((e) => {
					e.target.style.backgroundColor = 'black';
				}).mouseout((e) => {
					e.target.style.backgroundColor = 'inherit';
				});
				setTimeout(addHoverEvents, 10000);
			}
			addMouseEvents();
		});
  }
}

new ExtensionClient();