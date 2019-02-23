$(window).on("load",function(){
	waterfall();
	var dataInt = {"data":[{"src":'P_00.jpg'},{"src":'P_01.jpg'},{"src":'P_02.jpg'},{"src":'P_03.jpg'},{"src":'P_04.jpg'},{"src":'P_05.jpg'},{"src":'P_06.jpg'},{"src":'P_08.jpg'},{"src":'P_09.jpg'}]};
	window.onscroll = function(){
		if(checkScrollSlide()){
			$.each(dataInt.data,function(index,value){
                var $oBox = $('<div>').addClass('box').appendTo($('#main'));
                var $oPic = $('<div>').addClass('pic').appendTo( $( $oBox ) );
                $('<img>').attr('src','./images/' + $( value).attr( 'src') ).appendTo($oPic);
			});
			waterfall();
	}
	
	}
})


function waterfall(){
	var $boxs = $('#main>div');
	var w = $boxs.eq(0).outerWidth();
	var cols = Math.floor($(window).width()/w);
	$("#main").width(w*cols).css('margin','0 auto');
	var hArr = [];
	$boxs.each(function(index,value){
		var h = $boxs.eq(index).outerHeight();
		if(index <cols){
			hArr[index] = h;
		}else{
			var minH = Math.min.apply(null,hArr);
			var minHIndex = $.inArray(minH,hArr);
			$(value).css({
				'position':'absolute',
				'top': minH + 'px',
				'left': minHIndex *w + 'px'
			})
			hArr[minHIndex] += $boxs.eq(index).outerHeight();
		}
	})
}

function checkScrollSlide(){
	var $lastBox = $("#main>div").last();
	var lastBoxDis = $lastBox.offset().top + Math.floor($lastBox.outerHeight()/2);
	var scrollTop = $(window).scrollTop();
	var documentH = $(window).height();
	return (lastBoxDis < scrollTop + documentH) ? true : false;
}