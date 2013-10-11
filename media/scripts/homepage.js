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
	
		$('#navOpen').click(function() {
			$('#bottomNav').slideDown();
	//	$('#bottomNav').show();
		//$('#searchTrigger').toggle();
		//$('#searchCloser').toggle();
	});
	
});