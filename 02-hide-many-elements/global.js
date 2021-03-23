window.addEventListener("load", function(){
    var button = document.getElementById('button')

    button.addEventListener("click", function(){

        var divs_to_hide = document.getElementById('hide_me')

        for (var i = 0; i < divs_to_hide.clientHeight; i++){
            divs_to_hide[i].style.display = "none";
        }
    });
});