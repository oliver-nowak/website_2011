$(document).ready(function() 
{
	function handleImageClick()
	{
		home_set.animate({opacity: 0.0},
						250,
						">");
						
		$("#_home_strat").animate({opacity:0.0},
						250);
						
		$("#twitter_container").animate({opacity:0.0}, 250);				
						
		selectImage();
		
		$("#_image_strat").css("display", "block");
		$("#_image_strat").animate({opacity:1.0},
									100,
									clearAll);
	}

	function handleTextClick()
	{
		home_set.animate({opacity: 0.0},
						250,
						">");
						
		$("#_home_strat").animate({opacity: 0.0},
						250);
						
		$("#twitter_container").animate({opacity:0.0}, 250);					
						
		selectText();
		
		$("#_text_strat").css("display", "block");
		$("#_text_strat").animate({opacity: 1.0},
									100,
									clearAll);
	}
	
	function handleCodeClick()
	{
		home_set.animate({opacity: 0.0},
						250,
						">");
						
		$("#_home_strat").animate({opacity: 0.0},
								 250);
								 
		$("#twitter_container").animate({opacity:0.0}, 250);							 
								 
		selectCode();
		
		$("#_code_strat").css("display", "block");
		$("#_code_strat").animate({opacity: 1.0},
									100,
									clearAll);
	}
		
	function handleAboutClick()
	{
		home_set.animate({opacity: 0.0}, 
						 250,
						 ">");
						 
		$("#_home_strat").animate({opacity: 0.0},
							 250);
							 
		$("#twitter_container").animate({opacity:0.0}, 250);						 
							 
		selectAbout();
		
		$("#_about_strat").css("display", "block");
		$("#_about_strat").animate({opacity: 1.0},
									100,
									clearAll);
	}
	
	function clearAll()
	{
		$(this).stop(true);
		$(this).clearQueue();
		
		$("#_home_strat").css("opacity", 0.0);
		$("#twitter_container").css("opacity", 0.0);	
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