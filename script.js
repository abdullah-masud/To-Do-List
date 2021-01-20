let inputField = document.getElementById('inputField');
let enterBtn = document.getElementById('enterBtn');
let toDoContainer = document.getElementById('toDoContainer');

enterBtn.addEventListener('click', function () {
    var paragraph = document.createElement('ol');
    toDoContainer.appendChild(paragraph);
    paragraph.innerText = inputField.value;
    paragraph.classList.add('paragraph-styling');
    inputField.value = "";
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick', function () {
        toDoContainer.removeChild(paragraph);
    })
})