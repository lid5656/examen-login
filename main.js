function login(){
var user,pass;
user=document.getElementById("email").value;
pass=document.getElementById("contraseña").value;

if (user =="OMAR" || user =="omar" ) {
    
    if ( pass == 1258  ) {
        window.location="https://messi10a.netlify.app/"
    
    }
    else{
    window.alert("contraseña incorrecto")
    }
}
else
{
    window.alert("Usuario incorrecto")
}
}