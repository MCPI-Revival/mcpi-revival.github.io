---
layout: default
title: Frequently Asked Questions
center: false
---

## What is Minecraft Pi?

It's a fork (modification) of an old version of Minecraft Pocket Edition
(Alpha v0.6.1), ported to the Raspberry Pi.

## Can I play it?

MCPI-Reborn, the core project, officially supports at least Debian/Raspbian
Bullseye and Ubuntu 20.04. While it may work on other operating systems,
it is not officially supported.

## How do I get it?

### Option A: Pi-Apps (ARM/AArch64 Raspberry Pi OS only)
[![Pi-Apps](https://github.com/Botspot/pi-apps/blob/master/icons/badge.png?raw=true)](https://github.com/Botspot/pi-apps)

### Option B: MCPI-Packages (other Debian-based distros)
```
wget -qO- https://git.io/JE2s4 | sudo bash -
sudo apt-get install -y minecraft-pi-reborn-client
```

### Option C: Manual Installation
[View Manual Installation](https://gitea.thebrokenrail.com/TheBrokenRail/minecraft-pi-reborn/src/branch/master/docs/INSTALL.md)

### WSL2 + GWSL/WSLg (Windows)
MCPI-Reborn on Windows is just a happy coincidence, to check the instructions,
please join our [Discord Server](#where-can-i-ask-for-help).

## What extra features does MCPI have?

Minecraft: Pi Edition comes with a built-in scripting API, with clients
in multiple languages: Python ([mcpi](https://github.com/martinohanlon/mcpi),
[Picraft](https://picraft.readthedocs.io/)),
[JavaScript](https://github.com/mdnorman/node-mcpi), Java, and many more.

## How is it related to MCPE?

Minecraft: Pi Edition is related to Minecraft: Pocket Edition, because the
first is a "modified" and ported version of the second one, but they are
**not** the same. For example, MCPI by default doesn't have the Survival
mode enabled.

## And what is this?

This is the main webpage of [MCPI Revival](https://github.com/MCPI-Revival),
a community dedicated to Minecraft Pi (and eventually PE) modding. If you
are interested, come join us on [Discord](#where-can-i-ask-for-help)!
We also appreciate contributions and feedback about our projects in
[GitHub](https://github.com/MCPI-Revival)!

## Where can I find FAQ on other projects?

Mostly on their pages on GitHub.

## Where can I ask for help?

See our [troubleshooting guide]({{site.baseurl}}/troubleshooting.html), and feel
free to ask any more questions you have in our [Discord Server](https://discord.gg/DCwcpyf):

<iframe src="https://discord.com/widget?id=740287937727561779&theme=dark" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
