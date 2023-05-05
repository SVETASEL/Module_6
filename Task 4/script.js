const textField = document.querySelector('#textField');
textField.addEventListener('click',
function(event) {
    event.preventDefault();

var text =prompt("Введите текст в поле:");

if (text !==null) {textField.textContent = text;
}
})

document.querySelector('#textField').addEventListener('click', 
  (event) => {
    this.textContent = 'Другой текст';
})