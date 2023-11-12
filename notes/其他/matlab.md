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

# 你誰 

```matlab 
whos a
```

# 二值圖物件

```matlab 
indents = regionprops(bw);
locations = vertcat(indents.Centroid); 
boxes = vertcat(indents.BoundingBox);
diagonals = boxes(:,3:4);
```