$(document).ready(function()
{
	$(".jQzoom").mlens(
	{
		imgSrc: $(".jQzoom").attr("data-big"),
		lensShape: "circle",
		lensSize: 180,
		borderSize: 4,
		borderColor: "#fff"
	});

	$(".droplist").slideUp(0)
    $(".toggle").hover(function(){
        $(".droplist").slideToggle()
    },function(){
        $(".droplist").slideUp()
    });

});