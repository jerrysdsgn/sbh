
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var emailInput = document.getElementById("emailInput");
var varifMsg = document.getElementById("verifMsg");
var varifNot = document.getElementById("verifNot");

function validate(){
    if(emailInput.value == ""){
        varifMsg.innerHTML = "<span class='help is-danger'>Enter email address</span>";
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
        varifNot.innerHTML = "<span class='notification is-success'><strong>"+emailInput.value+"</strong> included.</span>";
        varifMsg.style.display = "none";
        setTimeout(function(){
            document.getElementById("emailForm").reset();
        }, 100);
        setTimeout(function(){
            varifNot.style.display = "none";
        }, 3000);
    }else{
        varifMsg.innerHTML = "<span class='help is-danger'>Enter a valid email</span>";
        event.preventDefault();
    }
}