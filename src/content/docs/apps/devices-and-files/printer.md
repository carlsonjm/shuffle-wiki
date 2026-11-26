---
title: "Add a printer"
description: "In System Settings, choose Printers, then Add. If there's no Printers page, two lines in Konsole add it."
keywords: "printer print printing scanner cups wifi usb hp canon epson brother"
tableOfContents: false
sidebar:
  order: 2
---

1. Turn the printer on. Connect it to the same Wi-Fi as your computer, or plug it in with its cable.
2. Open System Settings. Press the <kbd><a href="/start/first-steps/meta-key/">Meta</a></kbd> key, or tap the dot at the left end of the dock along the bottom of the screen. Search opens. Type **System Settings** and tap it.
3. Click **Printers** on the left, then **Add**. Pick your printer from the list. Most are found by themselves.

No **Printers** on the left? Printing isn't set up on this computer yet. Paste these two lines into Konsole, one at a time (see [Paste a line into Konsole](/apps/devices-and-files/konsole/)), then open System Settings again.

```sh frame="terminal" title="Konsole"
sudo pacman -S --needed cups print-manager
```

```sh frame="terminal" title="Konsole"
sudo systemctl enable --now cups
```
