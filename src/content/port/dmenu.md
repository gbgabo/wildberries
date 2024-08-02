---
title: dmenu
platforms: ['linux']
images: ['/src/assets/images/ports/dmenu.png']
---

1. On your **config.h** or **config.def.h**, replace the `colors` array values to:
   ```c
   // config.def.h
   static const char *colors[SchemeLast][2] = {
   							/*    fg         bg    */
   	[SchemeNorm]			= { "#c79bff", "#240041" },
   	[SchemeSel] 			= { "#00ffb7", "#900048" },
   	[SchemeOut] 			= { "#000000", "#00ffff" },
   };
   ```
2. Rebuild your dmenu fork;
   ```bash
   sudo make clean install
   ```
