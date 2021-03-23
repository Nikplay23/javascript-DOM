// Your JavaScript goes here.

window.addEventListener("load", function(){

    var name = document.getElementById("full_name")

    name.addEventListener("keyup", function(){
        var hello_andname = document.getElementById("greeting")

        hello_andname.innerHTML = ("Hello there, " + name.value + "!")
    });

});