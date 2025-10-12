//判斷用戶
var getUrlString = location.href;//取得網址
var url = new URL(getUrlString);
if (url.searchParams.get('id')=='3i'){
  var home = document.createElement("div");
  home.setAttribute('class', "btn");
  home.innerHTML = "<i class=\"fa-solid fa-angles-left\"></i>";
  home.style = "top:8px;left:8px;";
  home.setAttribute('herf', "../../index.html");
  home.addEventListener('click', function() {
    location.href='../../index.html';
  });
  document.body.appendChild(home);
}


//分享按鈕
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

//預覽介面

var imageModal= document.createElement("div");
imageModal.setAttribute('id', "imageModal");
imageModal.setAttribute('class', "modal");
imageModal.innerHTML ="<span class=\"close\">&times;</span><img class=\"modal-content\" id=\"enlargedImage\">";
document.body.appendChild(imageModal);





window.addEventListener("load", function () {
  // 檢查 jQuery
  if (typeof $ === "undefined") {
    console.warn("jQuery 未載入，無法啟用 TOC 點擊與收闔功能");
    return;
  }

  const toc = $(".md-sidebar-toc");

  // 1️⃣ 點擊項目切換 active 樣式
  toc.on("click", ".md-toc-link-wrapper", function (e) {
    e.stopPropagation();
    toc.find(".md-toc-link-wrapper").removeClass("active");
    $(this).addClass("active");
  });

  // 2️⃣ 摺疊展開機制
  toc.on("click", "details > summary", function (e) {
    e.stopPropagation();
    const parent = $(this).parent("details");
    if (parent.attr("open")) {
      parent.removeAttr("open");
    } else {
      // 關閉其他開啟的層
      toc.find("details[open]").not(parent.parents()).removeAttr("open");
      parent.attr("open", true);
    }
  });

  // 3️⃣ 預設收合所有子目錄
  toc.find("details").removeAttr("open");
});

var Main_LeftListLiSelector = $(".md-sidebar-toc");

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


// Get the modal
var modal = document.getElementById('imageModal');

// Get the image in the modal
var modalImg = document.getElementById('enlargedImage');

// Get all images and loop through them to add click event
var images = document.querySelectorAll('img');
images.forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

// Get the close button (X) and add click event to close the modal
var closeBtn = document.querySelector('.close');
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking anywhere outside the image
modal.onclick = function(event) {
    if (event.target !== modalImg) {
        modal.style.display = "none";
    }
}
