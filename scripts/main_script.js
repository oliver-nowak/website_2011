$(document).ready(function() 
{
	function handleImageClick()
	{
		alert("IMAGE clicked");
	}

	function handleTextClick()
	{
		alert("TEXT clicked");
	}
	
	function handleCodeClick()
	{
		alert("CODE clicked");
	}
		
	function handleAboutClick()
	{
		home_set.animate({opacity: 0.0}, 
						 250,
						 ">");
						 
		$("#_home_strat").animate({opacity: 0.0},
							 250);
							 
		selectAbout();
		
		$("#_about_strat").css("display", "block");
		$("#_about_strat").animate({opacity: 1.0},
									250);
	}

	$('#_image').click(handleImageClick);
	$('#_image').hover(function() {$(this).addClass('mouseOver')}, 
					   function() {$(this).removeClass('mouseOver')});
					   
	$('#_code').click(handleCodeClick);
	$('#_code').hover(function() {$(this).addClass('mouseOver')}, 
					   function() {$(this).removeClass('mouseOver')});
					   
	$('#_text').click(handleTextClick);
	$('#_text').hover(function() {$(this).addClass('mouseOver')}, 
					   function() {$(this).removeClass('mouseOver')});
					   
	$('#_about').click(handleAboutClick);
	$('#_about').hover(function() {$(this).addClass('mouseOver')}, 
					   function() {$(this).removeClass('mouseOver')});
	

});