// Your JavaScript goes here.

window.addEventListener("load", function(){

    var toggle_movie = document.getElementById('toggle_button');
  
      toggle_movie.addEventListener("click", function() {
  
      var movie = document.querySelectorAll("ul.second_five li");
  
      for (var i = 0; i < movie.length; i++) {
        if (movie[i].style.display === "list-item") {
          movie[i].style.display = "none";
        }
        else {
          movie[i].style.display = "list-item";
        }
      }
  
    });
  
});