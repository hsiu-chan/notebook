//判斷用戶

const home = document.createElement("div");
    home.className = "btn";
    home.innerHTML = `<i class="fa-solid fa-angles-left"></i>`;
    home.style = "top:8px;left:8px;";
    home.addEventListener('click', () => {
      location.href = '../../index.html';
    });



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







//載入完成後執行

document.addEventListener("DOMContentLoaded", () => {
  const url = new URL(location.href);
  if (url.searchParams.get('id') === '3i') {
    document.body.appendChild(home);
  }
  document.body.appendChild(share_bt);

  // === Modal 放大圖片功能 ===
  // === 1️⃣ 建立 Modal 結構 ===
  const imageModal = document.createElement("div");
  imageModal.id = "imageModal";
  imageModal.className = "modal";
  imageModal.innerHTML = `
    <span class="close">&times;</span>
    <img class="modal-content" id="enlargedImage">
  `;
  document.body.appendChild(imageModal);

  // === 2️⃣ 取得各元素 ===
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("enlargedImage");
  const closeBtn = modal.querySelector(".close"); // 從 modal 裡找更穩定

  // === 3️⃣ 綁定所有圖片點擊事件 ===
  document.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });

  // === 4️⃣ 關閉按鈕 ===
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // === 5️⃣ 點擊外部區域關閉 ===
  modal.addEventListener("click", (event) => {
    if (event.target !== modalImg) {
      modal.style.display = "none";
    }
  });


});


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
