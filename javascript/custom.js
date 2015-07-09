$(document).ready(function(){
	

	$("#beginBtn").click(function(){
		
		$("#home").fadeOut(2000, function(){
			window.location="firstChoiceCentral.html";
		});
		
	});

	switch (pg){
		case 1:
			$("#firstChoice").fadeIn(2000);
			break;
	}

	$("#downarrow").click(function(){
		window.location="#choose1";
	});



});