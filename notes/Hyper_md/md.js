//判斷用戶
var getUrlString = location.href;//取得網址
var url = new URL(getUrlString);
if (url.searchParams.get('id')=='3i'){
  var home = document.createElement("div");
  home.setAttribute('class', "btn");
  home.innerHTML = "<i class=\"fa-solid fa-angles-left\"></i>";
  home.style = "top:8px;left:8px;";
  home.setAttribute('herf', "../index.html");
  home.addEventListener('click', function() {
    location.href='../index.html';
  });
  document.body.appendChild(home);
}

/*window.onload=function(){
  var head=document.getElementsByTagName('head')[0]; //获取到head元素
  var link=document.createElement('link');//创建link元素节点，也就是link标签
  link.rel="stylesheet"; //为link标签添加rel属性
  link.href="Hyper_md/md.css";//为link标签添加href属性 ， 属性值是css外链样式表的路径
  head.appendChild(link);//将link元素节点添加到head元素子节点下
  
  var script=document.createElement('script');//创建script标签
  //script.crossorigin="anonymous"
  script.src="https://kit.fontawesome.com/849ddf9236.js";
  script.setAttribute('crossorigin', 'anonymous');
  //head.appendChild(script);//将script标签添加到head的子节点下
}*/


window.onload=function(){
  var head=document.getElementsByTagName('head')[0];
  var script=document.createElement('script');
  //script.crossorigin="anonymous"
  script.innerHTML=`var Main_LeftListLiSelector = $(".md-sidebar-toc li");
$(Main_LeftListLiSelector).on('click', function() {
$(Main_LeftListLiSelector).removeClass('active');
$(this).addClass('active');
});`
  head.appendChild(script);
}

var share_bt = document.createElement("div");
share_bt.setAttribute('class', "btn");
share_bt.innerHTML = "<i class=\"fa fa-share-alt fa-18\"></i>";
share_bt.style = "top:8px;right:8px;";
share_bt.addEventListener('click', function() {
  const value = decodeURI(url.hostname+url.pathname);
  const el = document.createElement('textarea');
  el.value = value;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
});
document.body.appendChild(share_bt);

var Main_LeftListLiSelector = $(".md-sidebar-toc li");

$(Main_LeftListLiSelector).on('click', function() {
  $(Main_LeftListLiSelector).removeClass('active');
  $(this).addClass('active');
});




var mdPreview = document.getElementsByClassName('mume');
for (var i = 0; i < mdPreview.length; i++) {
  mdPreview[i].addEventListener('click', function(event) {
    event.stopPropagation();
    if (document.body.hasAttribute('html-show-sidebar-toc')){
      document.body.removeAttribute('html-show-sidebar-toc');
    }
  })
}
