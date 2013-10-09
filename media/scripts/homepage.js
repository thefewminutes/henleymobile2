$(document).ready(function() {
	
	$('#btn_search').click(function() {
		$('#searchpanel').slideDown("fast");
		$('#searchTrigger').toggle();
		$('#searchCloser').toggle();
	});
	
	$('#searchCloser').click(function() {
		$('#searchpanel').slideUp("fast");
		$('#searchTrigger').toggle();
		$('#searchCloser').toggle();
	});
	
});