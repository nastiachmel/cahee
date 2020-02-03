    $('.menu__icon').on('click', function() {
      $('.menu').addClass('menu_state_open');
    });
    
function active( link) {
  $('.menu').removeClass('menu_state_open');
  $('.menu__icon').css("display",'block')
  var position = $(link).offset().top;
  $("HTML, BODY").animate({scrollTop: position}, 8000, 'linear');
};

$('.navigation__link-close').click(function(){
  $('.menu').removeClass('menu_state_open');
  $('.menu__icon').css("display",'block');
});

let position = $('.js-mainer-blog').offset().top;
let positionTitle = $('.js-about-title').offset().top;
$(window).scroll(function(){
   let windowScroll = $(window).scrollTop() + $(window).height();
    if (position < windowScroll) {
      $.each($('.article'), function(i, el) {
        setTimeout(function() {
          $(el).addClass("animated pulse");
        }, 500 + (i * 1000));
    
      });
    }
    if (positionTitle < windowScroll) {
      $('.js-btn').addClass("animated wobble");
    }
});



getData = (url)=> {
  return  fetch(url).then(function(result){
    return result.json();
  });
}
    
getData('https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=3d8b73d8e06f4b748ba94a97e994845f').then(function(result){
  if(result){
    result.articles.length=3;
    let list= ``;
    for (let news of result.articles){
      let date = new Date(news.publishedAt);
      let newDate= date.getDate();
      let month = ("0" + (date.getMonth() + 1)).slice(-2);     
      list += `  <li class="article" style="background-image:url(${news.urlToImage})">`;
      list += `   <div class="article-hover"></div>`;
      list += `   <div class="data"><span>${newDate } </span><span class="month">${month}</span></div>`;
      list += `<div class="title-article">${news.title} <br>`;
      if(news.author==null){
        news.author='Admin';
      }
      list += `<span class="author-blog">${news.author}</span></div>`;
      list += `  </li>`;
    }  
    document.getElementsByClassName('js-mainer-blog')[0].innerHTML = list;
  }  
})

more=()=>{
  $('.js-mainer-blog ').css("flex-wrap","wrap")
  getData('https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=3d8b73d8e06f4b748ba94a97e994845f').then(function(result){
    if(result){
      result.articles.length=6;
      let list= ``;
      for (let news of result.articles){
        let date = new Date(news.publishedAt);
        let newDate= date.getDate();
        let month = ("0" + (date.getMonth() + 1)).slice(-2);     
        list += `<li class="article" style="background-image:url(${news.urlToImage})">`;
        list += `<div class="article-hover"></div>`;
        list += `<div class="data"><span>${newDate } </span><span class="month">${month}</span></div>`;
        list += `<div class="title-article">${news.title} <br>`;
        if(news.author==null){
          news.author='Admin';
        }
        list += `<span class="author-blog">${news.author}</span></div>`;
        list += `  </li>`;
      }  
      document.getElementsByClassName('js-mainer-blog')[0].innerHTML = list;
    } 
  })
}