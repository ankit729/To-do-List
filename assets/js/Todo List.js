$("#toggleInput").click(function(){
	$("input[type='text']").slideToggle();
	$("#toggleInput").toggleClass("fa-minus fa-plus");
});
$("input[type='text']").keypress(function(event){
	if(event.which===13){
		let newtodo=$(this).val();
		$(this).val("");
		$("ul").prepend("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> "+newtodo+"</li>");
	}
});
$("ul").on("click","li span",function(event){
	$(this).parent().slideUp(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});