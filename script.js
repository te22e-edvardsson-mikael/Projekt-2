
//bilarna
document.addEventListener("DOMContentLoaded", function() {
    
    var buttons = document.querySelectorAll('.flex-container button');

buttons.forEach(function(button, index) {

  button.addEventListener('click', function() {
   
    var article = button.closest('article');
    var price = article.querySelector('h2').textContent.trim();

    var newItem = document.createElement('p');
    newItem.textContent =  "vara " + (index + 1) + ": " + price;

    var menyContent = document.getElementById('meny_content');
    menyContent.appendChild(newItem);
  });
});

//kundvagn
var menyButton = document.querySelector('#meny button');
menyButton.addEventListener('click', function(){
    var menyContent = document.getElementById('meny_content');
    if (menyContent.style.display === 'none'|| menyContent.style.display === ''){
        menyContent.style.display = 'block';
    } 

    else {
        menyContent.style.display = 'none';
    }
});
});