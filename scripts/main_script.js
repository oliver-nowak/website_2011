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
	
	function handleVideoClick()
	{
		alert("VIDEO clicked");
	}
		
	function handleAboutClick()
	{
		alert("ABOUT click");
	}


	$('#_image').click(handleImageClick);
	$('#_image').hover(function() {$(this).addClass('mouseOver')}, 
					   function() {$(this).removeClass('mouseOver')});
					   
	$('#_video').click(handleVideoClick);
	$('#_video').hover(function() {$(this).addClass('mouseOver')}, 
					   function() {$(this).removeClass('mouseOver')});
					   
	$('#_text').click(handleTextClick);
	$('#_text').hover(function() {$(this).addClass('mouseOver')}, 
					   function() {$(this).removeClass('mouseOver')});
					   
	$('#_about').click(handleAboutClick);
	$('#_about').hover(function() {$(this).addClass('mouseOver')}, 
					   function() {$(this).removeClass('mouseOver')});
	

});