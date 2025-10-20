({
  // Please visit the URL below for more information:
  // https://shd101wyy.github.io/markdown-preview-enhanced/#/extend-parser

  onWillParseMarkdown:  function(markdown) {
    function parseMarkdown(ctx) {
      //const md = markdownit()
      ctx=ctx.trim();


      // 標題
      ctx = ctx.replace(/(^|\n)#{6}\s*(.*)/g, '<h6>$2</h6>');
      ctx = ctx.replace(/(^|\n)#{5}\s*(.*)/g, '<h5>$2</h5>');
      ctx = ctx.replace(/(^|\n)#{4}\s*(.*)/g, '<h4>$2</h4>');
      ctx = ctx.replace(/(^|\n)#{3}\s*(.*)/g, '<h3>$2</h3>');
      ctx = ctx.replace(/(^|\n)#{2}\s*(.*)/g, '<h2>$2</h2>');
      ctx = ctx.replace(/(^|\n)#{1}\s*(.*)/g, '<h1>$2</h1>');

      // 引用
      ctx = ctx.replace(/^>\s(.*)/gm, '<blockquote>$1</blockquote>');

      // 行內代碼
      ctx = ctx.replace(/`([^`]+)`/g, '<code>$1</code>');


      // 多行代碼區塊
      ctx = ctx.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');

      
      

      

      // 連結
      markdown = markdown.replace(/\[([^\[]+)\]\((.*?)\)/g, '<a href="$2">$1</a>');

      // 圖片
      //markdown = markdown.replace(/!\[([^\[]+)\]\((.*?)\)/g, '<img src="$2" alt="$1">');

      // 多重清單處理
      function processIndentedLists(ctx) {
        const lines = ctx.split('\n');
        let result = '';
        let currentIndent = 0;
        let typeStack = [];
      
        function add(t) {
          return t ? '</ul>\n' : '</ol>\n';
        }
      
        function closeAll() {
          while (typeStack.length > 0) {
            result += add(typeStack.pop());
          }
          currentIndent = 0;

        }
      
        lines.forEach(line => {
          const match = line.match(/^(\s*)([-*]|\d+\.)\s+(.+)/);
          if (!match) {
            closeAll();
            result+=line+'\n';
            return;
          } else{
            //result+=line+':0';
            //return
          }
      
          const indentLevel = match[1].length / 2 + 1; // 計算層級
          const listItem = match[3].trim();
          const isUnordered = match[2].startsWith('-') || match[2].startsWith('*');
          
          // 根據當前類型設置
          let currentType = isUnordered; // true for <ul>, false for <ol>
      
          // 當前層級比之前高，添加新的一層 
          if (indentLevel > currentIndent) {
            for (let i = currentIndent; i < indentLevel; i++) {
              result += currentType ? '<ul>\n' : '<ol>\n';
              typeStack.push(currentType);
            }
          } 
          // 當前層級比之前低，關閉之前的 <ul> 或 <ol>
          else if (indentLevel < currentIndent) {
            for (let i = currentIndent; i > indentLevel; i--) {
              result += add(typeStack.pop());
            }
          }
          // 當前層級相同，檢查類型是否改變
          else if (indentLevel === currentIndent && typeStack.length > 0 && typeStack[typeStack.length - 1] !== currentType) {
            result += add(typeStack.pop()); // 關閉前一個類型
            result += currentType ? '<ul>\n' : '<ol>\n'; // 開啟新類型
            typeStack.push(currentType); // 更新類型堆疊
          }
      
          // 添加當前項目
          result += `<li>${listItem}</li> \n`; ///////////////////////////////////////////
          currentIndent = indentLevel; // 更新當前層級
        });
      
        closeAll();
        return result;
      }
      
      

      ctx =  processIndentedLists(ctx);


      // 換行
      //ctx = ctx.replace(/\s*\s{2}\n/g, '<br>')


      





      

      return ctx;
    }





    return new Promise((resolve, reject) => {
      //change fig size
      markdown = markdown + "\n";
      //雙欄
      markdown = markdown.replace(
        /:::\s*left\s*\n([\w\W]*?):::\s*right\s*\n([\w\W]*?):::/g,
        (all, l, r) => {
          return `<div class="dcl">
<section>

${l}
</section>

<section>

${r}
</section></div>\n`
        }
      );




      //////////////////// 自訂函數//////////////////////
while (/\\[^\{]*\{([^}]*)\}/.test(markdown)) {
  let i = 0;

  markdown = markdown.replace(
    /\\([^\{\[\]\s]+)(\[[^\]]*\])?\{([^\{\}]*)\}/g,
    (match, funcName, param, ctx) => {
      i += 1;

      const cleanParam = param ? param.slice(1, -1) : ""; // 移除中括號 []

      switch (funcName) {
        case "picBox": // 排圖片
          return `\n<div class="fbox">${ctx}</div>\n`;

        case "style": // css style
          return `<span style="margin:0; ${cleanParam}">${ctx}</span>`;

        case "oneline": // 單行文字
          const oneLineContent = parseMarkdown(ctx).replace(/\s+/g, ' ').trim();
          return `${oneLineContent}`;

        case "collapse": // 可折疊區塊
          return `<details>${cleanParam ? `<summary>${cleanParam}</summary>` : ""}${ctx}</details>`;

        case "div-class": // div + class
          return `<div${cleanParam ? ` class="${cleanParam}"` : ""}>${ctx}</div>`;

        case "top-left":
        case "top-right":
        case "bottom-left":
        case "bottom-right":
          return `<div class="${funcName}${cleanParam ? ` ${cleanParam}` : ""}">${ctx}</div>`;

        case "diagonal":
  // 解析 \diagonal[可選class]{上文字|下文字}
        let [topText, bottomText] = ctx.split("|");
        topText = topText?.trim() || "";
        bottomText = bottomText?.trim() || "";
        let classAttr = "table-diagonal" + (cleanParam ? ` ${cleanParam}` : "");

        return `<div class="${classAttr}" style="position:relative; width:100%; height:3em;"><span class="top-right">${topText}</span><span class="bottom-left">${bottomText}</span></div>`;

        default:
          i -= 1;
          return match;
      }
    }
  );

  if (i == 0) break;
}





      


      markdown = markdown.replace(
        /:::\s*spoiler\s*(\{.+\})?\s*([\w\W]*?)\s*:::/g,
        (whole, s1, c1) => `\<details\>
${(s1) ? "\<summary\>" + s1.replaceAll("\{", "").replaceAll("\}", "") + "\<\/summary\>\n" : ""}
${c1}\n\n\<\/details\>\n\n`
      );



      // Flex ENV
      markdown = markdown.replace(
        /:::fbox\s*?([\w\W]*?):::/g,
        (whole, t1) => `<div class="fbox">${t1}<\/div>\n`,
      );

      //img
      markdown = markdown.replace(
        /!\[([^\]]*)\]\(([^\)^=]+)(?:\s+=)?(\d*)?\s*\)/g,
        (all, title, src, width) => {
          return `<img src="${src}" alt="${title}" style="${(width) ? "width:" + width + "%" : ""};background-color: white;padding:0">`;
        }
      );

      markdown = markdown.replace(
        /\/\/\s*(.*?)\s*\/\//g,
        (whole, c) => `<em style="color:grey">${c}</em>`
      );






      //enable :::
      markdown = markdown.replace(
        /:::(\w+)\s*(\{.+\})?\s*([\w\W]*?):::/g,
        (whole, t1, t2, c1) => `
!!! ${(t1) ? t1 + ' ' : ""}${(t2) ? t2.replaceAll("\{", "").replaceAll("\}", "") : ""}
    ${c1.replaceAll("\n", "\n    ")}\n`,
      );
      //easy tikz 
      markdown = markdown.replace(
        /```\s*tikz\s*(\{.*?\})?\s*([\w\W]*?)\n```/g,
        (whole, t1, c1) => `\`\`\`latex \{cmd run_on_save hide ${(t1) ? t1.replaceAll("\{", "").replaceAll("\}", "") : ""}\}
\\documentclass\[margin=0pt\]\{standalone\}
\\usepackage\{tikz\}
\\begin\{document\}
\\begin\{tikzpicture\}
${c1}
\\end\{tikzpicture\}
\\end\{document\}
\`\`\``
      );

      //超連結
      markdown = markdown.replace(
        /\[([^[]*?)\]\(([^()]*?).md\)+/g,
        (all, title, src, x) => {
          return `[${title}](${src}.md) [:radioactive:](${src}.html)`
        }
      );

      //web
      markdown = markdown.replace(
        /@web\s*"?(https:\/\/)?([^\n]*)"?/g,
        (all, h, src) => {
          return `<iframe 
src="https:\/\/${src}" 
style="width:100%;height:124px" frameborder="no">
</iframe>\n`
        }
      );


      return resolve(markdown);
    });
  },


  
  onDidParseMarkdown: async function(html) {
    return new Promise((resolve, reject) => {
      html = ``
        + html + `<br /><br />`;

      html = html.replace(
        /(<table[^>]*?>[\w\W]*?<\/table>)/g, (all,) => { return `<div class="table-scroll-wrapper">${all}</div>` }
      );

      return resolve(html)
    })
  },

  
})
