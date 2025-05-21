---
title: hyprland
images: ['/src/assets/images/ports/hyprland.png']
platforms: ['linux']
---

## Installation

1. In your ~/.config/hypr/hyprland.conf file edit the lines under general {}
2. Save the config file, the colors should automatically apply to the window borders

  ```
      col.active_border = rgb(ff0e82)
      col.inactive_border = rgb(900048)
  ```

## Troubleshoot

1. Run hyprctl reload on your terminal
2. These two lines already exist in the default generated config of hyprland.conf, if you add a new general {} with these lines it will produce problems
