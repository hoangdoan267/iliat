$(document).ready(function(){
	$('body').on('click', '#menu-button', function(e){
		e.preventDefault();
		$('#dropdown-menu').toggleClass('active');
	});
});