---
title: "Turn Shuffle off or remove it"
description: "In Shuffle Settings, choose About, then Turn off. Removing it takes one line."
keywords: "turn off remove uninstall undo plain plasma back revert"
tableOfContents: false
sidebar:
  order: 3
---

1. Open **Shuffle Settings**: press <kbd><a href="/start/first-steps/meta-key/">Meta</a></kbd> + <kbd>I</kbd>, or press <kbd><a href="/start/first-steps/meta-key/">Meta</a></kbd>, type **Shuffle Settings** and tap it.
2. Choose **About** on the left, then **Turn off**.
3. Sign out when it asks. Plain Plasma is back when you sign in.

To remove Shuffle completely, paste this line into Konsole (see [Paste a line into Konsole](/apps/devices-and-files/konsole/)). Your apps and files are never touched.

```sh frame="terminal" title="Konsole"
sudo pacman -Rs shuffle-plasma
```
