---
title: wlogout
platforms: ['linux']
images: ['/src/assets/images/ports/wlogout.png']
contributors: ['LordWorm1996']
---

1. Download the contents of the folder on https://github.com/LordWorm1996/Wildberries-Ports/tree/main/Source/wlogout that include the pictures, layout and style.css
2. Place them on .config/wlogout
3. If you user hyprland make sure to also include these on your hyprland.conf file

```

######################
### WLOGOUT CONFIG ###
######################

layerrule = blur, logout_dialog
layerrule = ignorezero, logout_dialog
layerrule = ignorealpha 0.5, logout_dialog

```
