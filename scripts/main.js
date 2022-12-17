var sidebarTOCBtn = document.getElementById('sidebar-toc-btn')

sidebarTOCBtn.addEventListener('click', function(event) {
  event.stopPropagation()
  if (document.body.hasAttribute('html-show-sidebar-toc')) {
    document.body.removeAttribute('html-show-sidebar-toc')
  } else {
    document.body.setAttribute('html-show-sidebar-toc', true)
  }
})

var idxs= document.getElementById('tt')

//const folder_path ='./notes/'

document.getElementById('my_test').addEventListener('change', function(event) {	//my_test 為觸發運作的按鈕
	let files = event.target.files;	//選取之目標目錄內的檔案清單
	let result=''	//(透過id)取得要放置圖片的標籤位置
	for(let i=0; i<files.length; i++) {
		let item = document.createElement("img");	//產生圖片標籤
		result+=files[i].webkitRelativePath;	//設定圖片的來源位置
	}
  idxs.textContent=result;
});

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
