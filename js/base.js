jQuery(function(){
	$("input").focus(function(){
		$(this).css({position:"static"});
	});
	$("input").blur(function(){
		$(this).css({position:"fixed"});
	});
});