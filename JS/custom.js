$('#firstQuestion').click(function() {
  $('#firstAnswer').toggle(900);
  
});
$('#secondQuestion').click(function() {
  $('#secondAnswer').toggle(900);
  
});  

 var counting = 0;
 $('#readMore1').click(function() {
	counting++;
 	if (counting%2){
 	$( this ).text ('Read Less');
 }	else{
 	$( this ).text ('Read More');
 }
    $('#more1').toggle(900);
});

 var counting = 0;
 $('#readMore2').click(function() {
 	counting++;
	if (counting%2){
 	$( this ).text ("Read Less");
 }	else{
 		$( this ).text ("Read More");
 	}
   $('#more2').toggle(900);
 });

 var currentImage;

 $( ".container").click(function(e) {
	currentImage = e.target;
 	console.info(currentImage);

	$(e.target)

 	.css('position', 'fixed')
 	 .css('z-index', '2')
 	  .css('cursor', 'default')

	.animate({
 		width:"100%",
 		height:"100%",
 		margin:0,
 		top:0,
		left:0,
	}, 900, function() {
		$(".close").show(900);

	
	})  

 	  .clearQueue();
 	 console.log(currentImage.queue); 
 });

 $('.close').click(function(){
 	$(".close").hide();
 	$(currentImage)
 	.css('position', 'relative')
	  .css('z-index', '1')
	    .css('cursor', 'pointer')
	   .animate({
	   	width:'250px',
	   	height:'250px',
 	   	margin:'10px',
 	   }, 900, function() {

 	   });
 	  }); 
$(document).ready(function() {
var stickyNavTop = $('.navbar').offset().top;

var stickyNav = function(){
var scrollTop = $(window).scrollTop();
     
if (scrollTop > stickyNavTop) { 
    $('.navbar').addClass('sticky');
} else {
    $('.navbar').removeClass('sticky'); 
}
};

stickyNav();

$(window).scroll(function() {
	stickyNav();
});
});


