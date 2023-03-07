
/////側邊目錄收合////////////
var sidebarTOCBtn = document.getElementById('sidebar-toc-btn')

sidebarTOCBtn.addEventListener('click', function(event) {
  event.stopPropagation()
  if (document.body.hasAttribute('html-show-sidebar-toc')) {
    document.body.removeAttribute('html-show-sidebar-toc')
  } else {
    document.body.setAttribute('html-show-sidebar-toc', true)
  }
})

var mdPreview = document.getElementsByClassName('mume');
for (var i = 0; i < mdPreview.length; i++) {
  mdPreview[i].addEventListener('click', function(event) {
    event.stopPropagation();
    if (document.body.hasAttribute('html-show-sidebar-toc')){
      document.body.removeAttribute('html-show-sidebar-toc');
    }
  })

}
////////子目錄展開

var Main_LeftListLiSelector = $(".md-sidebar-toc li");
$(Main_LeftListLiSelector).on('click', function() {
$(Main_LeftListLiSelector).removeClass('active');
$(this).addClass('active');
});



/*
var idxs= document.getElementById('tt')
document.getElementById('my_test').addEventListener('change', function(event) {	//my_test 為觸發運作的按鈕
	let files = event.target.files;	//選取之目標目錄內的檔案清單
	let result=''	//(透過id)取得要放置圖片的標籤位置
	for(let i=0; i<files.length; i++) {
		result+=files[i].webkitRelativePath;	//設定圖片的來源位置
	}
  idxs.textContent=result;
});
*/


const notes_url ='https://api.github.com/repos/hsiu-chan/notebook/contents/notes';




$.get(notes_url,   
  function(dir){
  //let num=0;

    $.each(dir, function (index, dir) {
      if(dir.type=='dir'){
        var lines=$('<ul>');
        console.log(dir.name);
        //遍歷檔案
        $.get(notes_url+'/'+dir.name,function(data){
          let num=0;
          $.each(data,function(index,ele){
            let file_name=ele.name.split('.');
            if (file_name[1]=='html'){
              num+=1;
              console.log(file_name);

              let line=$('<a>',{href:`${ele.path}?id=3i`,text:file_name[0] });
              $(lines).append($('<li>').append(line))
            }
          })
          console.log(dir.name+'num'+num);
          if (num>0){
            $('#main').append($('<h1></h1>',{text: dir.name}));
            $('#main').append(lines);
            
  
          }


        },'json')


      }

  });
}, 'json');
