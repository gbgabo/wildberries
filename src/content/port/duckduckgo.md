---
title: Duckduckgo
images: ['/src/assets/images/ports/duckduckgo.png']
---

- Before installation, you can try this DuckDuckGo theme [here](https://duckduckgo.com/?kae=t&ko=1&kax=v185-4&kn=1&kbc=1&k5=2&kah=br-pt&kl=br-pt&kaq=-1&ku=-1&ks=m&k21=240041&kx=00ffb7&kf=1&k9=ff0e82&k7=19002e&kaa=c79bff&k8=c79bff&km=l&kj=900048&kt=p);

1. To save the theme, go to [https://duckduckgo.com/](https://duckduckgo.com/);
2. Open the browser devtools (`Ctrl+Shift+I` in most browsers);
3. Paste the following snippet on the **console** tab;
   ```js
   var wildberries = [
     '7=19002e',
     '8=c79bff',
     '9=ff0e82',
     'ae=t',
     't=p',
     's=m',
     'w=n',
     'm=l',
     'o=s',
     'j=900048',
     'a=p',
     'aa=c79bff',
     'u=-1',
     'x=00ffb7',
     'y=44475a',
     'af=1',
     'ai=1',
     'f=1',
   ];
   for (var i = 0; i < wildberries.length; i++) document.cookie = wildberries[i];
   alert('Appearance settings have successfully been updated!');
   location.reload();
   ```

- To make your own changes on the applied theme, go to [https://duckduckgo.com/settings](https://duckduckgo.com/settings);
