---
title: "Update the computer with Check for updates"
description: "Type Check for updates in Search. It lists every update, takes a restore point, then installs them."
keywords: "check for updates update upgrade system update pacman flatpak kernel plasma restore point restart after update arch news"
sidebar:
  order: 2
---

**Check for updates** updates the system, your apps and Shuffle together. It shows what it will install before it starts.

## Update

1. Press <kbd><a href="/start/first-steps/meta-key/">Meta</a></kbd> to open Search, type **Check for updates**, and tap it.
2. Read the list. **Big pieces in this update** names the large ones, such as a new Linux kernel, KDE Plasma or graphics drivers, with the version they go from and to. **Show what's included** opens the full list.
3. Tap **Update**. Type your password in the system's prompt when it asks.

Before anything is installed, it takes a **restore point**, so the computer can go back to how it was. See [Restore points](/shuffle/helpers/restore-points/).

## What it checks first

Check for updates stops or warns you before it starts when:

- Something else is installing at the same time.
- There is too little free space for the update to unpack. See [Free up space](/apps/devices-and-files/free-up-space/).
- The battery is low. Plug in first.
- The update brings a new KDE Plasma or KWin. It tells you to check that Shuffle has its update for that version first.
- Arch, the system Shuffle runs on, has posted a notice since your last update. Read it first.
- The list changed since you looked. Read it again before updating.

## When it is done

It says whether you need to restart:

- **Restart to finish** means the new parts start with the computer.
- **Nothing needs a restart** means it is safe to carry on as you are.

It also names the restore point it took, in case anything seems wrong. A Shuffle update that changes the desktop itself finishes when you sign out and back in, and the top of the screen says so.

## Without the Helper

You can also update in Konsole. See [Keep the computer up to date](/apps/getting-apps/update-apps/).
