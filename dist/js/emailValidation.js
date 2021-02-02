var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var emailInput = document.getElementById("emailInput");
var verifMsg = document.getElementById("verifMsg");
var verifNot = document.getElementById("verifNot");

function validate(){
    if(emailInput.value == ""){
        verifMsg.innerHTML = "<span class='help is-danger'>Enter email address</span>";
        emailInput.focus();
        event.preventDefault();
    }else if(emailInput.value != ""){
        checkEmail();
    }
}

function checkEmail(){
    var str = emailInput.value;
    const n = 4;
    var slice = str.substring(str.length - n);
    if(emailInput.value.match(mailformat) && slice == ".com"){
        verifNot.innerHTML = "<span class='notification learnion-green-bg'><strong>"+emailInput.value+"</strong> submitted to mailing list</span>";
        verifMsg.style.display = "none";
        setTimeout(function(){
            document.getElementById("emailForm").reset();
        }, 100);
        setTimeout(function(){
            verifNot.style.display = "none";
        }, 3000);
    }else{
        verifMsg.innerHTML = "<span class='help is-danger'>Enter a valid email</span>";
        event.preventDefault();
    }
}
