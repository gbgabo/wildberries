---
title: Neovim
platforms: ['windows', 'linux', 'mac']
images: ['/src/assets/images/ports/neovim-1.png', '/src/assets/images/ports/neovim-2.png', '/src/assets/images/ports/neovim-3.png']
contributors: ['ianklapouch']
---

## Install using your preferred package manager:


[lazy.nvim](https://github.com/folke/lazy.nvim)
```lua
{ "ianklapouch/wildberries", name = "wildberries", priority = 1000 }
```

[mini.deps](https://github.com/echasnovski/mini.nvim/blob/main/readmes/mini-deps.md)
```lua
add({ source = "ianklapouch/wildberries", name = "wildberries" })
```

[packer.nvim](https://github.com/wbthomason/packer.nvim)
```lua
use { "ianklapouch/wildberries", as = "wildberries" }
```

[vim-plug](https://github.com/junegunn/vim-plug)
```vim
Plug 'ianklapouch/wildberries', { 'as': 'wildberries' }
```