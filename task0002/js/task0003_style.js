function subStyle(){
	var manage=document.getElementsByClassName('manage')[0];
	var main=document.getElementsByClassName('main')[0];
	var detail=document.getElementsByClassName('detail')[0];
	manage.style.height=document.body.offsetHeight-60-60+'px';
	main.style.height=document.body.offsetHeight-60+'px';
	detail.style.width=document.body.offsetWidth-400+'px';
}
