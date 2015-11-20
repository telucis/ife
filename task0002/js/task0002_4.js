window.onload=function(){
	var receive=document.getElementsByTagName('input')[0];
	var show=true;
	var xmlhttp=new XMLHttpRequest();
	receive.onclick=function(){
		receive.value='';
		if(show){
			xmlhttp.onreadystatechange=gethttprequest;
			xmlhttp.open('GET','http://localhost/test.php',true);
			xmlhttp.send();
			show=true;
		}else{
			show=false;
		}
		
	}

	function gethttprequest(){
		if(xmlhttp.readyState==4 && xmlhttp.status>=200){
			var temp=xmlhttp.responseText.split(' ');
			var temp_ul=document.createElement('ul');
			var temp_li=[];
			for(var i=0;i<temp.length;i++){
				temp_li[i]=document.createElement('li');
				temp_li[i].innerHTML=temp[i];
				temp_ul.appendChild(temp_li[i]);
			}
			document.body.appendChild(temp_ul);
		}
	}
}
