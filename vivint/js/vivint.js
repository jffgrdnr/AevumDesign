$(function () {

	//Show/hide drop down menus
	$(".drop.default").on("click",function(){
		//Hide other dropdowns
		$(".drop").removeClass("default");
		$("menu").hide();
		//Show drop down for this dude
		var thisMenu = $(this).attr("data-menu");
		$("menu[data-menu*=" + thisMenu + "]").show();
		$(this).addClass("selected");
	});
	$(".drop.selected").on("click",function(){
		$("menu.dropDown").hide();
	});

	//Variables and data for Flot chart
    var families = [[12, 25],[24,135],[48,150],[95,350],[185,300],[1000,333],[5,350],[6,455], [7,500], [8, 489], [9, 422], [9,467], [10,555], [ 11,567],[12,535] ];
    var recruits = [[0, 25],[.5,100],[1,125],[2,127],[3,225],[4,400],[5,210],[6,244], [7,455], [8, 555], [9, 422], [9,467], [10,555], [ 11,534],[12,555] ];
    var reps = [[100, 25],[.5,135],[1,150],[2,200],[3,300],[4,333],[5,350],[6,350], [7,500], [8, 489], [9, 350], [9,467], [10,555], [ 11,500],[12,589] ];
    $.plot($("#placeholder"), [families, recruits, reps]);

    //Set timer for window resize
	var rtime = new Date(1, 1, 2000, 12,00,00);
	var timeout = false;
	var delta = 200;
	$(window).resize(function() {
	    rtime = new Date();
	    if (timeout === false) {
	        timeout = true;
	        setTimeout(resizeend, delta);
	    }
	});
	//Use timer on window resize to manage chart resizing
	function resizeend() {
	    if (new Date() - rtime < delta) {
	        setTimeout(resizeend, delta);
	    } else {
	        timeout = false;
	        $.plot($("#placeholder"), [families, recruits, reps]);
	    }               
	}

	//Basic toggle support for bottom buttons
	$("footer .switch").on("click",function(){
		$(".switch").removeClass("active");
		$(this).addClass("active");
	});

	//Table row color helper
	$("tr:has(td)").addClass("rowOption");

});