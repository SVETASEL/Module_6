var input = document.querySelector("#input");
var submit = document.querySelector("#submit");
var duplicateField = document.querySelector("#duplicateField");

input.addEventListener('input', function() {
  duplicateField.textContent = input.value;
});

submit.addEventListener("click", function(event) {
  event.preventDefault();
  
  console.log(input.value);
  
  input.value = " ";
  duplicateField.textContent = " ";
});