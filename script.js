//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {

  var body = document.querySelector("body");

  
  if (body.innerHTML.trim() === "") {
   
    body.innerText = "DOM load success";
  }
});