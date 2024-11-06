---
toc:
    depth_from: 1
    depth_to: 3
html:
    offline: false
    embed_local_images: false #嵌入base64圖片
print_background: true
export_on_save:
    html: true
---





\oneline{
- d
- d
\picBox{
    ![alt text](paste_src/test-5.png =50)
        ![alt text](paste_src/test-5.png =20)

}


}



# basic 

- **bold**
- *Italic*
- ***f8***
- ```hello```
  - 不要放在一行開頭
- ~~Delete~~
- {++dd++}
- H~2~O, e^i^
- ==Hightlight==
- //Italic quote//
- 註解[^tag] 
[^tag]: 真的沒用
- line: ```ddc```
- HTML 符號
  - &alpha;&beta;&gamma; 
![alt text](paste_src/test-3.png)
  - &rarr;&deg;&check;&cross;
- :fa-car::smile::bus:
  - [emoji-cheat-sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md )
- [ ] CHECK
- [x] CROSS



 


---

> quote 

Words
: Definition






```python 
import numpy as np
```





## latex 

$$
\sum^{1}_{x=2}\frac{1}{2}
$$



## Table







|a|l|-|
|-|-|-|
|\oneline{
1. fwegfwerfergw4edfaerg
2. f 
3. &rarr;

![alt text](paste_src/test-1.png =20)
}|\oneline{
1. f 
2. f fstfergw4edfaergfwegfwerfergw4edfaergfwegfwerfergw4edfaerg
3. &rarr;
![alt text](paste_src/test-1.png =20)
}|\collapse[fwegfwerfergw4edfaergfwegfwerfergw4edfaergfwegfwerfergw4edfaergfwegfwerfergw4edfaergfwegfwerfergw4edfaergfwegfwerfergw4edfaergfwegfwerfergw4edfa oerg]{dd}|



|a|a|
|-|-|
|a|\oneline{
- dc 
- df 
- d
\collapse[]{hi}
}| 


>gfgw


# 手搓插件 

\style[background:red ; color: yellow]{ hi}

\collapse[詳細]{資料}

## 圖片大小
![alt text](paste_src/test-4.png =20)![alt text](paste_src/test-4.png =50)

:::fbox 
![alt text](paste_src/test-4.png =20)
![alt text](paste_src/test-4.png =50)
:::


# 花招

## alert 

:::note {note}
notes
:::


:::warning {Warning}
!!
:::


:::info {info}
i
:::



:::danger
{qq}
danger
ff
:::



:::example
$$
-\frac{1}{12}=1+2+3+4...
$$
:::

:::question
:::

:::success
:::
:::failure
:::








## 兩欄 
:::left
- left 
- left 
- left 
- left 
- left 
:::right
1. right 
1. right 
1. right 
1. right 
1. right 
:::




 ```lr```
![alt text](paste_src/test-2.png)


## Iframe

@web https://la.wikipedia.org/wiki/Lamina_propria


## Mermaid 


```mermaid
graph TD 
a[hi] 
b[fg] 
a-->|00|b

```



```tikz
\draw[gray, thick] (-1,2) -- (2,-4);
\draw[gray, thick] (-1,-1) -- (2,2);
\draw[red, thick] (1,-1) -- (2,2);
\filldraw[black] (0,0) circle (2pt) node[anchor=west]{Intersection point};
```


# 官方文檔 
https://shd101wyy.github.io/markdown-preview-enhanced/#/ 

@web https://shd101wyy.github.io/markdown-preview-enhanced/#/

## 危險，容易有 bug 的毒瘤: 內嵌可執行代碼

@web https://shd101wyy.github.io/markdown-preview-enhanced/#/code-chunk?id=showcases-outdated



## 施工中 


<table class="diagonal">
    <thead>
        <tr>
            <th class="top-left">
                <div class="col-title">星期</div>
                <div class="row-title">節次</div>
            </th>
            <th>星期一</th>
            <th>星期二</th>
            <th>星期三</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>第一節</td>
            <td>國文</td>
            <td class="top-left">
                <div class="col-title">星期</div>
                <div class="row-title">節次</div>
            </td>
            <td>數學</td>
        </tr>
        <tr>
            <td>第二節</td>
            <td>自然</td>
            <td>歷史</td>
            <td>地理</td>
        </tr>
        <tr>
            <td>第三節</td>
            <td>公民</td>
            <td>體育</td>
            <td>音樂</td>
        </tr>
    </tbody>
</table>
