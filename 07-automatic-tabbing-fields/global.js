// Your JavaScript goes here.
window.addEventListener("load", function(){

    var first_numbers = document.getElementById("first");
    var second_numbers = document.getElementById("second");
    var third_numbers = document.getElementById("third");
  
    first_numbers.addEventListener("keyup", function(){
      cursor = first_numbers.value.length;
      number_next = parseInt(first_numbers.getAttribute("maxlength"));
  
      if (cursor === number_next) {
        second.focus();
      }
    });
  
    second_numbers.addEventListener("keyup", function(){
      cursor = second_numbers.value.length;
      number_next = parseInt(second_numbers.getAttribute("maxlength"));
  
      if (cursor === number_next) {
        third_numbers.focus();
      }
    });
  
});
    