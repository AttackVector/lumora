---
title: 'New Beta Release Coming, Updater WIP'
pubDate: 2026-11-10T00:00:00.000Z
description: 'We are getting the third beta of Lumora 27 ready. Here is what to expect and how you can help test it.'
author: 'Lumora Team and Testers'
tags: ["Release"]
---
We are putting together the third beta build of Lumora 27. It SHOULD be ready by this Sunday. Fixes MINOR bugs. Old testers will not need to update unless they desire.

## Bugs Found in the Halloween Beta (as of 11/10)
* Internet does not connect -->
  Use the workaround listed below
`ls -l /stub-resolv.conf`

`sudo rm /stub-resolv.conf`

`sudo ln -sf /run/systemd/resolve/stub-resolv.conf /etc/resolv.conf`

`ls -l /etc/resolv.conf`

`ping -c 3 ubuntu.com`

* Desktop loses its icons and becomes unstable after hours of usage
  Logout & Log Back in (fix is on the way)
  


## What testers will be asked to try
* Boot the live session. Does it reach the desktop without errors?
* Run the installer on a blank disk.
* Check that Wi-Fi, sound, the touchpad and screen brightness work.
* Use the dock and the top bar. Open and close a few apps.
* Restart after install and make sure the boot splash and login screen look right.
* Use the OS for their work, or personal use.

## How to report a problem
In our issues channel in the discord server put your computer's make and model, what you did,
what you expected, and what happened instead. A photo of an error message helps a lot. 

<div class="callout">
  <p>Beta software can lose data. Test on a machine that has nothing important on it.</p>
</div>
