//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  // Get the body element
  var body = document.querySelector("body");

  // Check if body is empty
  if (body.innerHTML.trim() === "") {
    // If body is empty, write the string "DOM load success"
    body.textContent = "DOM load success";
  }
});