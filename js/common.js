var btn = document.querySelector('.header-search-icon');
btn.addEventListener('click', function() {
  location.href = "./result.html?search=" + document.querySelector(".header-input").value
});

var header1 = document.getElementById('header1');
var header2 = document.getElementById('header2');
var header3 = document.getElementById('header3');
var menu1 = document.getElementById('menu1');
var menu2 = document.getElementById('menu2');
var menu3 = document.getElementById('menu3');

header1.addEventListener('mouseover', function() {
  menu1.style.display = 'block';
});

header1.addEventListener('mouseleave', function() {
  menu1.style.display = 'none';
});

header2.addEventListener('mouseover', function() {
  menu2.style.display = 'block';
});

header2.addEventListener('mouseleave', function() {
  menu2.style.display = 'none';
});


header3.addEventListener('mouseover', function() {
  menu3.style.display = 'block';
});

header3.addEventListener('mouseleave', function() {
  menu3.style.display = 'none';
});

