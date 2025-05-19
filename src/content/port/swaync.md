---
title: swaync
platforms: ['linux']
assets:
  - name: "Config File"
    url: "https://github.com/LordWorm1996/Wildberries-Ports/blob/main/Source/swaync/config.json"
  - name: "Style File"
    url: "https://github.com/LordWorm1996/Wildberries-Ports/blob/main/Source/swaync/style.css"
---

1. Download the config.json and style.css from https://github.com/LordWorm1996/Wildberries-Ports/tree/main/Source/swaync
2. Place them on .config/swaync
3. If you user hyprland make sure to also include these on your hyprland.conf file
```

#####################
### SWAYNC CONFIG ###
#####################

layerrule = blur, swaync-control-center
layerrule = blur, swaync-notification-window
layerrule = ignorezero, swaync-control-center
layerrule = ignorezero, swaync-notification-window
layerrule = ignorealpha 0.5, swaync-control-center
layerrule = ignorealpha 0.5, swaync-notification-window

```
