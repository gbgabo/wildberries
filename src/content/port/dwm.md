---
title: dwm
platforms: ['linux']
images: ['/src/assets/images/ports/dwm.png']
---

1. On your config.h or config.def.h, replace the `colors` array values to:

   ```c
   // config.def.h
   static const char _colors[][3] = {
   					/*   fg 		  bg 		 border  */
   	[SchemeNorm] 	= { "#c79bff", "#240041", "#444444" },
   	[SchemeSel] 	= { "#00ffb7", "#900048", "#900048" },
   };
   ```

2. Rebuild your dwm fork

   ```bash
   sudo make clean install
   ```
