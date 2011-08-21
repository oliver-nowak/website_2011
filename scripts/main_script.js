$(document).ready(function() 
{
	function handleImageClick()
	{
		alert("IMAGE clicked");
	}

	function handleTextClick()
	{
		home_set.animate({opacity: 0.0},
						250,
						">");
						
		$("#_home_strat").animate({opacity: 0.0},
						250);
						
		selectText();
		
		$("#_text_strat").css("display", "block");
		$("#_text_strat").animate({opacity: 1.0},
									2000);
	}
	
	function handleCodeClick()
	{
		home_set.animate({opacity: 0.0},
						250,
						">");
						
		$("#_home_strat").animate({opacity: 0.0},
								 250);
								 
		selectCode();
		
		$("#_code_strat").css("display", "block");
		$("#_code_strat").animate({opacity: 1.0},
									2000);
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