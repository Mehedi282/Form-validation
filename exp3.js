function validation(){
	var acc =document.getElementById("account").value;
	var pass =document.getElementById("pass").value;
	var sec =document.getElementById("sec").value;
	var tel =document.getElementById("tel").value;
	var eml =document.getElementById("eml").value;
	
	if(acc==""){
		document.getElementById("Error_msg").innerHTML="Enter the user name first!!";
		return false;
	}
	
	if(acc.length<6){
		document.getElementById("Error_msg").innerHTML="Oppss!! User name can't be less than 6 disit!";
		return false;
	}
	
	if(pass==""){
		document.getElementById("Error_msg").innerHTML="  Enter a password please";
		return false;
	}
	
	if(pass.length<6){
		document.getElementById("Error_msg").innerHTML=" Oppss!!! Passwword can't be less than 6 disit!";
		return false;
	}
	
	if(sec.length==0){
		document.getElementById("Error_msg").innerHTML=" Oppss!!! Select a region!";
		return false;
	}
	
	if(tel.length==0){
		document.getElementById("Error_msg").innerHTML=" Enter phone number please!";
		return false;
	}
	
	if(tel.charAt(0)!="0"){
		document.getElementById("Error_msg").innerHTML=" Oppss!!! First three disit of the phone number must be 0";
		return false;
	}
	
	for(i = 1; i < tel.length; i++){
      ch = tel.charAt(i);
	if(!((ch >= "0")&&(ch <= "9"))){
	    document.getElementById("Error_msg").innerHTML = "Ohhh!!! The Phone Number format is wrong!";
	    return false; 	     
	}
	}
	
	if(tel.length<11){
		document.getElementById("Error_msg").innerHTML=" Phone number can't be less than 11 disits!";
		return false;
	}
	
	if(eml.length==0){
		document.getElementById("Error_msg").innerHTML=" Oppss!!! Enter Email please!";
		return false;
	}
	
	var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
	var bool = reg.test(eml);
	if(!bool){
	  document.getElementById("Error_msg").innerHTML = "The Eamil format is wrong!";
      return false;  
   }
	
	
	
	else{
		document.getElementById("Error_msg").innerHTML=" Great!! You can submit now. ";
		return true;
	}
	
	
}
