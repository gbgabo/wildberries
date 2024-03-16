---
title: Xresources
platform: ['linux']
images: ['/src/assets/images/ports/xresources.png']
---

On your home directory find a `.Xresources` file, or else create it, and paste the snippet below:

```bash
# .Xresources
! special
*.foreground:   #ff0e82
*.background:   #19002e
*.cursorColor:  #ff0e82

! black
*.color0:       #151515
*.color8:       #505050

! red
*.color1:       #900048
*.color9:       #900048

! green
*.color2:       #00ff40
*.color10:      #00ff40

! yellow
*.color3:       #f4cc53
*.color11:      #f4cc53

! blue
*.color4:       #00ffff
*.color12:      #00ffff

! magenta
*.color5:       #c79bff
*.color13:      #c79bff

! cyan
*.color6:       #00ffb7
*.color14:      #00ffb7

! white
*.color7:       #d0d0d0
*.color15:      #f5f5f5
```

To apply the changes run the following command:

```bash
xrdb .Xresources
```
