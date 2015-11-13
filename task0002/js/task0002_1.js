window.onload=function(){
	var oInput=document.getElementById("hobby");
	var oBtn=document.getElementsByTagName("input")[0];
	var oP=document.getElementsByTagName("p")[0];
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
	oBtn.onclick=function(){
		//console.log(oInput.value.split(","));
		oArr=[]
		var oBrr=oInput.value.split(',');
		var oCrr=[];
		for(var i=0;i<oBrr.length;i++){
			oBrr[i]=trim(oBrr[i]);
			if(oBrr[i]!=''){
				oCrr.push(oBrr[i]);
			}
		}
		oArr=unique(oCrr);
		oP.innerHTML=oArr;
	}

}