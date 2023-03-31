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
