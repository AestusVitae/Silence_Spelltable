# Silence Spelltable

A simple extension that just clicks the mute button whenever it's visible on [Spelltable][], for players who use Discord or other options to talk to each other.

Wizards of the Coast/Spelltable team, please just let us reliably disable our microphones so I don't have to maintain this extension.

## Is this safe?

The extension only runs on pages that match `https://spelltable.wizards.com/game/*`.  While it has full page access there, the only thing it does is find the mute button and click it.  On all other pages the browser won't even load this extension.  Any update that allowed access to more sites would cause the browser to ask you for updated permissions.

When logging into Spelltable with your Wizards account, you are redirected to `https://myaccounts.wizards.com`.  This extension does NOT have access to that page, so there's no way to intercept passwords or anything like that.

It could theoretically _(but does NOT)_ capture session credentials or make API requests on your behalf, but assuming Wizards of the Coast takes security seriously that would only provide access to Spelltable and not any other aspect of your Wizards account.


### Viewing the Source Code

Since Spelltable is linked to your Wizards account, and the contents of a Wizards account can be quite valuable, it's probably worth it to audit this code yourself.  Luckily it's incredibly simple and anyone who can understand Magic the Gathering should have no trouble reading it.  No programming knowledge required.

* [manifest.json][] is a [manifest file][].  This is a pure data file that is read by the browser.  It provides metadata like the name of the extension, as well as where to load the actual code from and when.  The [content_scripts][] section is the most important part as it tells the browser to run `silence.js` on any page that matches `https://spelltable.wizards.com/game/*`.  This filetype does not allow for comments, so I can't document exactly what's going on at each step of the way, but you can compare against the `manifest_file` link above to see what each line does.

* [silence.js][] is a javascript file, particularly a [Content Script][] that is run inside a web page and can do anything a normal script could do on that page.  This script finds the mute button and clicks it.  Any lines in the file that start with `//` are comments, meaning they're meant to tell the reader what each line of code does.


### Building your own

Unfortunately just matching up the source code is not always enough to know something is safe.  Ken Thompson's paper [Reflections on Trusting Trust][] _(pdf)_ cover the why.

If you really want to be certain, you can build and package the extension yourself.  That way you know that the code you read is the code that gets run.  How you do this varies by browser but starts with you [downloading the source code][repo].  Most browsers have a way to load an extension for testing, which you should be able to find by searching the sites below.

* [Firefox Web Extensions][]
* [Chrome Extensions][]
* [Edge Extensions][]


[Chrome Extensions]: https://developer.chrome.com/docs/webstore/publish/
[Content Script]: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts
[content_scripts]: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts
[Edge Extensions]: https://docs.microsoft.com/en-us/microsoft-edge/extensions-chromium/publish/publish-extension
[Firefox Web Extensions]: https://extensionworkshop.com/documentation/publish/package-your-extension/
[manifest file]: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json
[manifest.json]: https://github.com/AestusVitae/Silence_Spelltable/blob/main/src/manifest.json
[Reflections on Trusting Trust]: https://cs.cmu.edu/~rdriley/487/papers/Thompson_1984_ReflectionsonTrustingTrust.pdf
[repo]: https://github.com/AestusVitae/Silence_Spelltable
[silence.js]: https://github.com/AestusVitae/Silence_Spelltable/blob/main/src/silence.js
[Spelltable]: https://spelltable.wizards.com
