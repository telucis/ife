window.onload=function(){
	var oInput=document.getElementsByClassName("hobby");
	var oBtn=document.getElementsByClassName("btn");
	var oDiv_1=document.getElementById('step01');
	var oDiv_2=document.getElementById('step02');
	var oDiv_3=document.getElementById('step03');
	var p1=document.createElement('p');
	var p2=document.createElement('p');
	var p3=document.createElement('p');
	var p4=document.getElementById('err');
	var oArr=[];
	function trim(string){
		return string.replace(/(^\s*)|(\s*$)/g,'');
	}
	function unique(arr){
		var result=[] , isrepeat;
		for(var i=0;i<arr.length;i++){
			isrepeat=false;
			for(var j=0;j<result.length;j++){
				if(arr[i]==result[j]){
					isrepeat=true;
					break;
				}
			}
			if(!isrepeat){
				result.push(arr[i])	
			}
		}
		return result;
	}
	//step1
	oBtn[0].onclick=function(){
		//console.log(oInput.value.split(","));  /
		oArr=[]
		var oBrr=oInput[0].value.split(/\,/g);
		var oCrr=[];
		for(var i=0;i<oBrr.length;i++){
			oBrr[i]=trim(oBrr[i]);
			if(oBrr[i]!=''){
				oCrr.push(oBrr[i]);
			}
		}
		oArr=unique(oCrr);
		p1.innerHTML=oArr;
		oDiv_1.appendChild(p1);
	}
	//step2
	oBtn[1].onclick=function(){
		//console.log(oInput.value.split(","));  /
		oArr=[]
		var oBrr=oInput[1].value.split(/\,|\;|\、|\，|\s/g);
		var oCrr=[];
		for(var i=0;i<oBrr.length;i++){
			oBrr[i]=trim(oBrr[i]);
			if(oBrr[i]!=''){
				oCrr.push(oBrr[i]);
			}
		}
		oArr=unique(oCrr);
		p2.innerHTML=oArr;
		oDiv_2.appendChild(p2);
	}
	//step3
	function showError(msg){
		if(msg){
			p4.innerHTML=msg;
		}else{
			p4.innerHTML='';
		}
	}
	oBtn[2].onclick=function(){
		//console.log(oInput.value.split(","));  /
		oArr=[]
		p3.innerHTML='';
		var oBrr=oInput[2].value.split(/\,|\;|\、|\，|\s/g);
		var oCrr=[];
		for(var i=0;i<oBrr.length;i++){
			oBrr[i]=trim(oBrr[i]);
			if(oBrr[i]!=''){
				oCrr.push(oBrr[i]);
			}
		}
		oArr=unique(oCrr);
		if(oArr.length==0){
			showError('输入不能为0');
			if(oDiv_3.lastChild==p3){oDiv_3.removeChild(p3);}
		}
		else if(oArr.length>=5){
			showError('输入不能超过5');
			if(oDiv_3.lastChild==p3){oDiv_3.removeChild(p3);}
		}
		else{
			showError();

			for(var i=0;i<oArr.length;i++){
				var hobby=document.createElement('input');
				hobby.setAttribute('type','checkbox');
				hobby.setAttribute('id','checkbox'+i);
				var label=document.createElement('label');
				label.setAttribute('for','checkbox'+i);
				label.innerHTML=oArr[i];
				p3.appendChild(hobby);
				p3.appendChild(label);
				p3.innerHTML+='<br>';
			}
			
			oDiv_3.appendChild(p3);
		}
		
	}
}