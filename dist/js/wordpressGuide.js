 //Definimos el container de la lista
 var bhInstallContainer = document.getElementById("bhSteps");
 var imInstallContainer = document.getElementById("imSteps");
 var eleInstallContainer = document.getElementById("elSteps");

 //Definimos los elementos de la lista
 var bhInstallSteps = document.getElementsByClassName("bh-install-list");
 var imInstallSteps = document.getElementsByClassName("im-install-list");
 var elInstallSteps = document.getElementsByClassName("el-install-list");

 var installInmotion = document.getElementById("installInmotion");
 var toggleStep1I = document.getElementById("toggleStep1inmotion");
 var toggleStep2I = document.getElementById("toggleStep2inmotion");
 var toggleStep3I = document.getElementById("toggleStep3inmotion");
 var toggleStep4I = document.getElementById("toggleStep4inmotion");

 var toggleStep1B = document.getElementById("toggleStep1bluehost");
 var toggleStep2B = document.getElementById("toggleStep2bluehost");
 var toggleStep3B = document.getElementById("toggleStep3bluehost");
 var toggleStep4B = document.getElementById("toggleStep4bluehost");

 var toggleElementor1 = document.getElementById("elementorInstall1");
 var toggleElementor2 = document.getElementById("elementorInstall2");
 var toggleElementor3 = document.getElementById("elementorInstall3");
 var toggleElementor4 = document.getElementById("elementorInstall4");

 for(i = 0; i < bhInstallSteps.length; i++){
     //Checa cual de los elementos i de la lista está siendo seleccionado
     bhInstallSteps[i].addEventListener("click", function(){
         //Define la clase activa
         var current = document.getElementsByClassName("is-active-bluehost");
         //Los que no son seleccionados, se les quita la clase activa
         current[0].className = current[0].className.replace(" is-active-bluehost", "");
         //Al seleccionado se le agrega la clase activa
         this.className += " is-active-bluehost";
     });
 }

 for(i = 0; i < imInstallSteps.length; i++){
     imInstallSteps[i].addEventListener("click", function(){
         var current = document.getElementsByClassName("is-active-inmotion");
         current[0].className = current[0].className.replace(" is-active-inmotion", "");
         this.className += " is-active-inmotion";
     })
 }

 for(i = 0; i < elInstallSteps.length; i++){
     elInstallSteps[i].addEventListener("click", function(){
         var current = document.getElementsByClassName("is-active-elementor");
         current[0].className = current[0].className.replace(" is-active-elementor", "");
         this.className += " is-active-elementor";
     })
 }

 //var installStep = document.getElementById("installStep");

 toggleStep1B.addEventListener('click', function(){
     document.getElementById("installStep").src = "gif/BluehostWpInstall-Step1.mp4";
     document.getElementById("stepDesc").innerHTML = "";
 })

 toggleStep2B.addEventListener('click', function(){
     document.getElementById("installStep").src = "gif/BWP-Step2.mp4";
     document.getElementById("stepDesc").innerHTML = "";
     this.classList.add(".is-active-bluehost");
 })

 toggleStep3B.addEventListener('click', function(){
     document.getElementById("installStep").src = "gif/BWP-Step3.mp4";
     document.getElementById("stepDesc").innerHTML = "";
 })

 toggleStep4B.addEventListener('click', function(){
     document.getElementById("installStep").src = "gif/bluehostSSL/bluehostssl.mp4";
     document.getElementById("stepDesc").innerHTML = "";
 })

 toggleStep1I.addEventListener('click', function(){
     document.getElementById("installStepI").src = "gif/inmotionInstall1.mp4";
     document.getElementById("stepDesc").innerHTML = "";
 })

 toggleStep2I.addEventListener('click', function(){
     document.getElementById("installStepI").src = "gif/InstallingInMotion2.mp4";
     document.getElementById("stepDesc").innerHTML = "";
 })

 toggleStep3I.addEventListener('click', function(){
     document.getElementById("installStepI").src = "gif/InstallingInMotion3.mp4";
     document.getElementById("stepDesc").innerHTML = "<ul><li>1. Enter https as site protocol<li><li>2. Select your domain name from dropdown<li><li>3. Select your domain name from dropdown<li><li>4. Set you site's name and description</li><li>5. Create admin username and password (dont use 'Admin', set safe name and password)</li><li>6. You can leave plugins checkbox blank</li><li>7. INSTALL</li><li>8. Access `Administrative URL`</li><li>9. You will get taken to dashboard</li></ul>";
 })

 toggleStep4I.addEventListener('click', function(){
     document.getElementById("installStepI").src = "gif/inmotionSSL/inmotionSSL.mp4";
     document.getElementById("stepDesc").innerHTML = "";
 })

 toggleElementor1.addEventListener('click', function(){
     document.getElementById("elementorInstallVisual").src = "gif/elementor/elementorStep1.mp4";
     document.getElementById("elemDesc").innerHTML = "Click the Get Started button and create an account";
 })

 toggleElementor2.addEventListener('click', function(){
     document.getElementById("elementorInstallVisual").src = "gif/elementor/elementorStep2.mp4";
     document.getElementById("elemDesc").innerHTML = "Go over the Elementor Quiz";
 })

 toggleElementor3.addEventListener('click', function(){
     document.getElementById("elementorInstallVisual").src = "gif/elementor/elementorStep3.mp4";
     document.getElementById("elemDesc").innerHTML = "Choose a plan and enter your site's domain";
 })

 toggleElementor4.addEventListener('click', function(){
     document.getElementById("elementorInstallVisual").src = "gif/elementor/elementorStep4.mp4";
     document.getElementById("elemDesc").innerHTML = "Run the Elementor installer, activate the plugin, and go over to your main Dashboard";
 })

