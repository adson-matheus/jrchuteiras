// mostrar mais da pagina
$(function(){
	$(".mostrar").click(function(){
		$(".display-4").show(1000);
	});
});
// esconder a seta ao clicar
$(function(){
	$(".mostrar").click(function(){
		$(this).hide();
	});
});

// toggle chuteiras em produtos.html
$(function(){
	$("#toggle_chuteiras").on("click", function(){
		$(".chuteiras_down").toggle(1000);
		$(this).toggleClass('rotate');
	});
});

// toggle society em produtos.html
$(function(){
	$("#toggle_society").on("click", function(){
		$(".society_down").toggle(1000);
		$(this).toggleClass('rotate');
	});
});

// toggle tenis em produtos.html
$(function(){
	$("#toggle_tenis").on("click", function(){
		$(".tenis_down").toggle(1000);
		$(this).toggleClass('rotate');
	});
});

// toggle camisas em produtos.html
$(function(){
	$("#toggle_camisas").on("click", function(){
		$(".camisas_down").toggle(1000);
		$(this).toggleClass('rotate');
	});
});