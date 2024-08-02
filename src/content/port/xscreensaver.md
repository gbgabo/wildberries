---
title: Xscreensaver
platforms: ['linux']
---

On your home directory find a `.Xresources` file, or else create it, and paste the snippet below:

```bash
!general dialog box (affects main hostname, username, password text)
xscreensaver.Dialog.foreground:         #00ffb7
xscreensaver.Dialog.background:         #240048

xscreensaver.Dialog.topShadowColor:     #240048
xscreensaver.Dialog.bottomShadowColor:  #240048

xscreensaver.Dialog.Button.foreground:  #00ffb7
xscreensaver.Dialog.Button.background:  #900042

!username/password input box and date text colour
xscreensaver.Dialog.text.foreground:    #00ffb7
xscreensaver.Dialog.text.background:    #900042
xscreensaver.Dialog.internalBorderWidth:25
xscreensaver.Dialog.borderWidth:        0
xscreensaver.Dialog.shadowThickness:    0

!timeout bar (background is actually determined by Dialog.text.background)
xscreensaver.passwd.thermometer.foreground:  #00ffb7
xscreensaver.passwd.thermometer.background:  #2040e0
xscreensaver.passwd.thermometer.width:       0
```
