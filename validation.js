function validate() {
	var res1=document.getElementById('fname').value
	var res2=document.getElementById('lname').value






	
// fname validation    
   if( res1.length==0 ){
    	document.getElementById('msg1').innerHTML="**first name field should not be empty";
		return false;
	}
    else if(isNaN(res1)==false){
		document.getElementById('msg1').innerHTML="**first name field should be a alphabet";
		return false;
	}
	else if(res1.length<3 || res1.length>15 ){
		document.getElementById('msg1').innerHTML="**first name field should consist atleat  3 to 15 characters ";
		return false;
	}
	
// Lname validation
    if( res2.length==0 ){
    	document.getElementById('msg2').innerHTML="**lname name field should not be empty";
		return false;
	}
    else if(isNaN(res2)==false){
		document.getElementById('msg2').innerHTML="**lname name field should be a alphabet";
		return false;
	}
	else if(res2.length<1 || res2.length>10 ){
		document.getElementById('msg2').innerHTML="**lname name field should consist atleat 1 to 10 characters  only";
		return false;
	}

//validation

	if(res1=="Yajnesh" && res2=="P"){
		return true;
	}
	else{
		document.getElementById('msg3').innerHTML="**You are not registered user";
		return false;
	}


 
	
	

}