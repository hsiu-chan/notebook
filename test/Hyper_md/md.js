window.onload=function(){
  var head=document.getElementsByTagName('head')[0]; //获取到head元素
  var link=document.createElement('link');//创建link元素节点，也就是link标签
  link.rel="stylesheet"; //为link标签添加rel属性
  link.href="Hyper_md/md.css";//为link标签添加href属性 ， 属性值是css外链样式表的路径
  head.appendChild(link);//将link元素节点添加到head元素子节点下
  var script=document.createElement('script');//创建script标签
  //script.crossorigin="anonymous"
  script.src="https://kit.fontawesome.com/849ddf9236.js";
  script.setAttribute('crossorigin', 'anonymous');
  head.appendChild(script);//将script标签添加到head的子节点下
}

var mdPreview = document.getElementsByClassName('mume');
for (var i = 0; i < mdPreview.length; i++) {
  mdPreview[i].addEventListener('click', function(event) {
    event.stopPropagation();
    if (document.body.hasAttribute('html-show-sidebar-toc')){
      document.body.removeAttribute('html-show-sidebar-toc');
    }
  })
}


var getUrlString = location.href;//取得網址
var url = new URL(getUrlString);
if (url.searchParams.get('id')=='3i'){
  var home = document.createElement("a");
  home.innerHTML = "<i class=\"fa-solid fa-angles-left\"></i>";
  home.style = "top:8px;left:8px;position:fixed;z-index: 99;font-size: 24px;cursor: pointer;color: inherit;text-align: center;width: 32px;cursor: pointer;opacity: .4;word-wrap: break-word;";
  home.href="../index.html"
  document.body.appendChild(home);
} 
