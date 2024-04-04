---
title: zsh
platform: ['linux', 'mac']
images: ['/src/assets/images/ports/zsh.png']
assets: ['wildberries.zsh-theme']
---

#### This port requires:

- [oh-my-zsh](https://ohmyz.sh/);
- [nerd-fonts](https://www.nerdfonts.com/);

1. Download the `wildberries.zsh-theme` file available below in this page;
2. Add the line below it on your `.zshrc` file to source the theme;

   ```bash
   source "$PATH_TO_FILE/wildberries.zsh-theme"
   ```

3. Restart your shell by sourcing its updated rc file just type the previous command on your prompt and the theme should be visible;
   ```bash
   source zshrc
   ```

- If you want to use the theme colors on other prompt layout, you can use the following **ANSI escape codes to represent 256-colors**:

| Color   | Code |
| ------- | ---- |
| #900048 | 013  |
| #00ffb7 | 014  |
| #19002E | 016  |
| #240041 | 053  |
| #c79bff | 171  |
