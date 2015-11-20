window.onload=function(){

	var left=document.getElementById('left');
	var right=document.getElementById('right');
	var box=right.getElementsByTagName('div');
	var move=false;
	var startX=0,startY=0,disX=0;

	for(var i=0;i<box.length;i++){
		box[i].onmousedown=function(e){
			var e=e||window.event;e.cancelBubble=true;
			move=true;
			this.style.zIndex=10;
			disX=e.clientX-this.parentNode.offsetLeft;
			startX=e.clientX;
			startY=e.clientY-this.offsetTop;
			this.style.position='absolute';
			this.style.left=e.clientX-startX+'px';
			this.style.top=e.clientY-startY+'px';
			this.setAttribute('class','active');
		}
		document.onmousemove=function(e){
			var e=e||window.event;e.cancelBubble=true;
			if(move){
				document.getElementsByClassName('active')[0].style.left=e.clientX-startX+'px';
				document.getElementsByClassName('active')[0].style.top=e.clientY-startY+'px';
				document.getElementsByClassName('active')[0].style.opacity=0.5;
			}
		}
		box[i].onmouseup=function(e){
			var e=e||window.event;e.cancelBubble=true;
			move=false;
			document.getElementsByClassName('active')[0].setAttribute('class','')
			Math.abs(e.clientX-disX-left.offsetLeft)<=30 && left.appendChild(this);
			Math.abs(e.clientX-disX-right.offsetLeft)<=30 && right.appendChild(this);
			//this.offsetTop>=left.offsetTop &&
			//this.offsetTop<=(left.offsetTop+left.offsetHeight)) &&
			this.style.opacity=1;
			this.style.position='static';
		}
	}
}