window.onload=function(){
	var oDate=document.getElementsByTagName('input')[0];
	var oBtn=document.getElementsByTagName('input')[1];
	var oTime=document.getElementsByTagName('p')[0];

	oBtn.onclick=function(){
		var year=oDate.value.match(/^\d{4}/);
		var mounth=oDate.value.match(/\d{2}(?=\-\d{2}$)/);
		var date=oDate.value.match(/\d{2}$/);
		//oTime.innerHTML=year+' '+mounth+' '+date;
		var date1=Date.UTC(year-0,mounth-1,date-0,23,00,00);
		var date2=Date.now();
		oTime.innerHTML=Date.now()/(1000*3600)+'<br>'+date1/(1000*3600);
		/*
		setInterval(function(){
			oTime.innerHTML=parseInt((date1-Date.now())/(1000*3600))
		},1000)	;
		*/
	}
	
}