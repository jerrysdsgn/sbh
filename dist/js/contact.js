//Name Valid:
var nameInput = document.getElementById("nameInput");
var verifName = document.getElementById("verifName");

//EmailValid:

var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var emailInput = document.getElementById("emailInput");
var verifEmail = document.getElementById("verifEmail");
var verifNot = document.getElementById("verifNot");

//Subject Valid
var subjectInput = document.getElementById("subjectInput");
var verifSubject = document.getElementById("verifSubject");


//Mesaje Valid
var msgInput = document.getElementById("msgInput");
var verifDesc = document.getElementById("verifDesc");

function validate(){
    if(nameInput.value == ""){
      verifName.innerHTML = "<span class='help is-danger'>Enter name</span>";
      event.preventDefault();
      return false;
    }

    if(subjectInput.value == ""){
      verifSubject.innerHTML = "<span class='help is-danger'>Enter subject</span>";
      event.preventDefault();
      return false;
    }

    if(msgInput.value == ""){
      verifDesc.innerHTML = "<span class='help is-danger'>Enter message</span>";
      event.preventDefault();
      return false;
    }

    if(emailInput.value == ""){
      verifEmail.innerHTML = "<span class='help is-danger'>Enter email address</span>";
        event.preventDefault();
        return false;
    }else if(emailInput.value != ""){
        checkEmail();
    }
}

function checkEmail(){
    var str = emailInput.value;
    const n = 4;
    var slice = str.substring(str.length - n);
    if(emailInput.value.match(mailformat) && slice == ".com"){
        verifNot.innerHTML = "<span class='notification is-success'>Message submitted.</span>";
        verifEmail.style.display = "none";
        setTimeout(function(){
            document.getElementById("contactForm").reset();
        }, 100);
        setTimeout(function(){
            verifNot.style.display = "none";
        }, 3000);
    }else{
        verifEmail.innerHTML = "<span class='help is-danger'>Enter a valid email</span>";
        event.preventDefault();
        return false;
    }
}