(function() {
	
	let $ = document.querySelector.bind(document);			
	var btnMenu = $(".menu-drop");
	var menu = $("#menu");
	var btnOpenMenu = $('#nav-toggle');
	
	btnMenu.addEventListener('click', function(e){

		event.preventDefault();

		var menu = document.getElementById('menu');
		var style = window.getComputedStyle(menu);
		var display = style.getPropertyValue('display');

		if ( display == 'none') {
			menu.style.display = 'block';			
			btnOpenMenu.style.background = "url('assets/images/icon-close.png') no-repeat";


			
		} else {			
			menu.style.display = 'none';
			btnOpenMenu.style.background = "url('assets/images/icon-menu.png') no-repeat";
		}
		
	});
	



})();