// 顯示搜尋內容

var url = location.href;

if(url.indexOf('?')!=-1) {
    var searchContent = url.split('?')[1].split('=')[1]
    document.querySelector(".result-input").value = decodeURI(searchContent)
}

// 搜尋

var btn = document.querySelector('.result-search-icon');
btn.addEventListener('click', function() {
  location.href = "./result.html?search=" + document.querySelector(".result-input").value
});


// 切換全部、國小、國中、高中

$('.result-category').click( function(){
    if ( $(this).hasClass('result-category-select') ) {
        $(this).removeClass('result-category-select');
    } else {
        $('.result-category.result-category-select').removeClass('result-category-select');
        $(this).addClass('result-category-select');    
    }
});


