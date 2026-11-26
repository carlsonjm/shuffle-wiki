---
title: "Add the app store"
description: "Discover isn't there? Two lines in Konsole add it."
keywords: "app store discover flathub flatpak missing skipped no store refused failed"
tableOfContents: false
sidebar:
  order: 2
---

Set up offers the app store as its last step. If you skipped it, or it couldn't be added, searching for Discover finds nothing. Add it this way.

1. Open Konsole and paste the first line below (see [Paste a line into Konsole](/apps/devices-and-files/konsole/)). Type your password when asked; it stays invisible as you type. Wait until it finishes.
2. Paste the second line. The computer restarts, and Discover is ready, with the apps on Flathub.

```sh frame="terminal" title="Konsole"
sudo /usr/share/shuffle/setup/shuffle-add appstore
```

```sh frame="terminal" title="Konsole"
systemctl reboot
```
