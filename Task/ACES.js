var nameInput = document.querySelector('#name');
document.getElementById('my-form').addEventListener('submit', function(evt){
    evt.preventDefault();
document.getElementById("myDIV").style.backgroundColor = nameInput.value;
})
