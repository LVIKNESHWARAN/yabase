




function login() {
       
    var phonenumber=document.getElementById("user").Value
    var password=document.getElementById("pass").Value
    var message=document.getElementById("message")

    
   
    if(phonenumber.trim()===''|| password.trim()===''){
        message.textContent='please Enter both username and password.'
    
    }

  if(phonenumber=='user' && password==123){
      message.textContent='Login successfull!';
      message.style.color='green'
    }
    
    else{
        message.textContent='Invaild username or password';
        message.style.color='red'
        
    }
}


