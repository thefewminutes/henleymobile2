$(document).ready(function() {
	
	$('#btn_search').click(function() {
		$('#searchpanel').slideDown("slow");
		$('#searchTrigger').toggle();
		$('#searchCloser').toggle();
	});
	
	$('#searchCloser').click(function() {
		$('#searchpanel').slideUp("slow");
		$('#searchTrigger').toggle();
		$('#searchCloser').toggle();
	});
	
	$("#navOpen").click(function(){
        $("#bottomNav").slideToggle("slow");
  		$('#navArrow').toggleClass('arrow-up-rel').toggleClass('arrow-down-rel');
    });
	
});