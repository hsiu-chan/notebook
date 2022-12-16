
## cursor
滑鼠游標形狀
```css
.myMOUSE{ cursor: auto; }
.myMOUSE{ cursor: crosshair; }
.myMOUSE{ cursor: default; }
.myMOUSE{ cursor: e-resize; }
.myMOUSE{ cursor: help; }
.myMOUSE{ cursor: move; }
.myMOUSE{ cursor: n-resize; }
.myMOUSE{ cursor: ne-resize; }
.myMOUSE{ cursor: nw-resize; }
.myMOUSE{ cursor: pointer; }
.myMOUSE{ cursor: progress; }
.myMOUSE{ cursor: s-resize; }
.myMOUSE{ cursor: text; }
.myMOUSE{ cursor: w-resize; }
.myMOUSE{ cursor: wait; }
.myMOUSE{ cursor: inherit; }
```
## opacity
透明度

## CSS 強制文字換行
用以下的設定，就可以讓連結或是長文字不會造成跑版：
```css 
overflow-wrap: break-word;
```
### word-break
word-break 決定如何斷行「單詞」。所謂的單詞，指的是像英文中的 “word” 就是一個單詞。可以針對 CJK (中日韓) 和 non-CJK 的文字採取不一樣的斷詞規則。

- normal: 預設值，英文不會在單詞中間斷開，CJK 字元會在任意位置斷開。
- break-all: 英文和 CJK 會在任意位址斷開。
- keep-all: 英文不會在字中間斷開，CJK 字元也不會在任意位置斷開。

### overflow-wrap
overflow-wrap 屬性的作用是告訴瀏覽器，如果詞斷行後的結果還是會溢出容器元素，該如何處理。

- normal：預設值，如果文字太長，可能會溢出容器元素。
- break-word：如果文字太長，沒辦法裝進容器元素裡，允許文字在任意位置斷行。
