---
title: fzf
platforms: ['windows', 'linux', 'mac']
---

1. On your **bashrc**, **zshrc**, or any other shell init file, export the `FZF_DEFAULT_OPTS` enviroment variable:
   ```bash
   export FZF_DEFAULT_OPTS="--color=bg+:#900048,bg:-1,spinner:#ff0e82,hl:#00ffb7 \
                           --color=fg:#cdd6f4,header:#ff0e82,info:#cba6f7,pointer:#00ffb7 \
                           --color=marker:#900048,fg+:#00ffb7,prompt:#cba6f7,hl+:#00ffb7"
   ```
2. Restart your shell by sourcing its updated rc file;
   ```bash
   source bashrc #or zshrc and etc...
   ```
