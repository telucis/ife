window.onload=function(){
	var slide=document.getElementById('slide');
	var img=document.getElementsByTagName('img');
	var order=true;
	var current=0;
	var img_length=img.length;
	var slide_l=0,speed=0;
	//slide.style.left='0'
	//var autoplay=setInterval(next,2000);

	function next(){
		order && (current>=img_length ? current=0 : current++);
		order || (current<=0 ? current=img_length : current--);
		moveto();
	}
	function moveto(){
		var target=-current*img[0].offsetWidth;
		console.log(target);

		var imgplay=setInterval(function(){
			speed=(target-slide.style.left)/10;
			console.log(slide.left);
			//speed>0 ? speed=Math.floor(speed) : speed=Math.ceil(speed);
			slide.style.left==target ? clearInterval(imgplay) : (
					slide_l+=speed,
					slide.style.left=slide_l+'px'
				);
		},30)
	}
	
	//console.log(slide.style.left);
}