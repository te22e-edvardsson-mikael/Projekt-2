document.addEventListener("DOMContentLoaded", function(){
   const buttons = document.querySelectorAll('.flex-conteiner button');
buttons.forEach(button, index) {
  button.addEventListener('click', function() {
   
    var article = button.closest('article');

    var imgSrc = article.querySelector('img').getAttribute('src');
    var price = article.querySelector('h2').textContent.trim();

    var newItem = document.createElement('p');
    newItem.textContent = "bil " + (index + 1) + ": " + price;

    var menyContent = document.getElementById('meny_content');
    menyContent.appendChild(newItem);
  });
});