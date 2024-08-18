function formControl(){

var name,userName,email, message;

name = document.getElementById("name").value;
userName = document.getElementById("username").value;
email = document.getElementById("email").value;
message = document.getElementById("userMessage").value;

if(name==""){
    alert("Name information cannot be empty.")
    if(userName==""){
        alert("Username information cannot be empty.");
        if(email==""){
            alert("your email address cannot be empty.");
            if(message==""){
                alert("Your message cannot be empty.");

            }
        }
    }

}  
}