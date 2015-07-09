$(document).ready(function(){
	
///index page

	$("#beginBtn").click(function(){
		
		$("#home").fadeOut(1000, function(){
			window.location="firstChoiceCentral.html";
		});
		
	});

	switch (pg){
		case 1:
			$("#firstChoice").fadeIn(1000);
			break;
	}

	////skateboard

	$("#downarrow").click(function(){
		window.location="#choose1";
	});

	$("#Btn1").click(function(){
		$("#firstChoice").fadeOut(1000, function(){
			window.location="jumpChoice.html";
		});
	});

	switch (pg){
		case 2:
			$("#jumpChoice").fadeIn(1000);
			break;
	}

	$("#Btn2").click(function(){
		$("#firstChoice").fadeOut(1000, function(){
			window.location="stayChoice.html";
		});
	});

	switch (pg){
		case 3:
			$("#stayChoice").fadeIn(1000);
			break;
	}



	////jump choice

	$("#Btn11").click(function(){
		$("#jumpChoice").fadeOut(1000, function(){
			window.location="danceChoice.html";
		});
	});

	switch (pg){
		case 21:
			$("#danceChoice").fadeIn(1000);
			break;
	}

	$("#Btn12").click(function(){
		$("#jumpChoice").fadeOut(1000, function(){
			window.location="step.html";
		});
	});

	switch (pg){
		case 22:
			$("#stepChoice").fadeIn(1000);
			break;
	}



	///Dance page

	$("#downarrowEnd").click(function(){
		window.location="#chooseFinal";
	});


	$("#endBtn").click(function(){
		$("#danceChoice").fadeOut(1000, function(){
			window.location="index.html";
		});
	});

	switch (pg){
		case 0:
			$("#home").fadeIn(1000);
			break;
	}

	///Step page
	$("#endBtn2").click(function(){
		$("#stepChoice").fadeOut(1000, function(){
			window.location="index.html";
		});
	});

	switch (pg){
		case 0:
			$("#home").fadeIn(1000);
			break;
	}


});