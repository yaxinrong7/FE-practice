var data=['iphone XS MAX','ipad','100元超市购物券','佳能相机','200元购物券','谢谢参与'];
var timer = null;
var flag = 0;
window.onload = function(){
	var start = document.getElementById('start');
	var stop = document.getElementById('stop');

	start.onclick = playFun;

	stop.onclick = stopFun;

	document.onkeyup = function(event){
		event = event || window.event;
		if(event.keyCode == 13){
			if (flag == 0) {
				playFun();
				flag =1;
			}
			else{
				stopFun();
				flag=0;
			}
		}
	}
}

function playFun(){
		var title = document.getElementById('title');
		var start = document.getElementById('start');
		clearInterval(timer);
		timer = setInterval(function(){
			var rand = Math.floor(Math.random()*data.length);
			title.innerHTML = data[rand];
		},50);
		start.style.background = '#999';
}
function stopFun(){
	clearInterval(timer);
	var start = document.getElementById('start');
	start.style.background = '#036';
}