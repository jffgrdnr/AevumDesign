(function(){
	//Main function for playground - function expression that executes immediately

	$("li .expanded").click(
		function(){
			$(".angle").toggle(function(){
				$(this).animate({
					height:'1000'
				},500);
				$("section").animate({
					width:'300'
				},500);
				$(this).animate({
					height:'200'
				},500);
			})
			$(this).hide();
			$(".action.shown").show();
		});
	$("li .shown").click(
		function(){
			$(".angle").toggle(function(){
				$(this).animate({
					height:'100'
				},500);
				$("section").animate({
					width:'100%'
				},500);
			})
			$(this).hide();
			$(".action.expanded").show();
		});
})();