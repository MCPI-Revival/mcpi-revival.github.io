---
layout: default
title: Frequently Asked Questions
center: false
---

## What is Minecraft Pi?

It's a fork (modification) of an old version of Minecraft Pocket Edition (Alpha v0.6.1), ported to the Raspberry Pi.

## Can I play it?

It depends on your platform: If you are in a Raspberry Pi 2 or superior, with Raspberry Pi OS (previously Raspbian) installed as one of your operating systems, yes! Otherwise, you can use [MCPI-Docker](https://gitea.thebrokenrail.com/TheBrokenRail/minecraft-pi-docker), which, as its name says, requires Docker, or you can use the MCPI-Docker mods in any other RPi emulator (QEMU, QEMU + KVM).

## How do I get it?

If you have an updated RPi OS Full version, you already have it! If you have an updated RPi OS without MCPI preinstalled, you can install it by running the following command:

```sh
sudo apt-get install minecraft-pi
```

Otherwise, if you are using MCPI-Docker, it will install MCPI automatically.

## What extra features does MCPI have?

Minecraft: Pi Edition comes with a built-in scripting API, with clients in multiple languages: Python ([mcpi](https://github.com/martinohanlon/mcpi), [Picraft](https://picraft.readthedocs.io/)), [JavaScript](https://github.com/mdnorman/node-mcpi), Java and probably more.

## How is it related to MCPE?

Minecraft: Pi Edition is related to Minecraft: Pocket Edition, because the first is a "modified" and ported version of the second one, but they are **not** the same. For example, MCPI by default doesn't have the Survival features enabled.

## And what is this?

This is the main webpage of [MCPI Revival](https://github.com/MCPI-Devs), a community dedicated to Minecraft Pi (and eventually PE) modding. If you are interested, come join us! In [Discord]({{ site.baseurl }}/discord.html), [Reddit](https://old.reddit.com/r/MCPIDevs) and our [forums](https://mcpi-devs.freeforums.net/). We also appreciate contributions and feedback on our projects in [GitHub](https://github.com/MCPI-Devs)!
