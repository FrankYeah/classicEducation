var btn = document.querySelector('.header-search-icon');
btn.addEventListener('click', function() {
  location.href = "./result.html?search=" + document.querySelector(".header-input").value
});

