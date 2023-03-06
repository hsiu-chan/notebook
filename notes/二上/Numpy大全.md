---
html:
    offline: false
    embed_local_images: false #遷入base64圖片
print_background: true
export_on_save:
  html: true
---

```python{cmd}
import numpy as np
a=np.arange(6)
print(a)
print(a.argmax())
print(a[1:])
print(a[4::-1])
print(a[::2])
print(a[a%3==0])
a[a%3==0]=0
print(a)
print(np.unique(a))
```

```python{cmd}
import numpy as np
a=np.arange(6).reshape(3,-1)
a1=np.expand_dims(a,axis=0)
a2=np.squeeze(a1,axis=0)
print('a1='+ str(a1))
print('a2='+ str(a2))
```
expand_dims
expand_dimsd
expand_dimsd
expand_dimsd
expand_dimsdd
expand_dims
```python{cmd}
import numpy as np
a=np.arange(6)
print(a)
print(a.argmax())
print(a[1:])
print(a[4::-1])
print(a[::2])
print(a[a%3==0])
a[a%3==0]=0
print(a)
print(np.unique(a))
```

```python{cmd}
import numpy as np
a=np.arange(6).reshape(3,-1)
a1=np.expand_dims(a,axis=0)
a2=np.squeeze(a1,axis=0)
print('a1='+ str(a1))
print('a2='+ str(a2))
```
expand_dims
expand_dimsd
expand_dimsd
expand_dimsd
expand_dimsdd
expand_dims

<i class="fa-solid fa-angles-left"></i>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/></svg>
