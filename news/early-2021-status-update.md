---
layout: default
title: Early 2021 Status Update
center: false
---

A lot has happened since the MCPI-Revival project was founded in mid-2020. This project was founded to revive an abandoned version of Minecraft, and now our efforts are starting to bear fruit. Here is a status update on our current and upcoming projects!

## New Logo!
A contest was held (from ``2021-1-15 01:00 UTC`` to ``2021-1-17 01:00 UTC``) to pick a new logo for the MCPI-Revival project. Ultimately, ``Option #2`` emerged victorious!

<center><img alt="New Logo" width="256" src="{{ site.baseurl }}/assets/img/news/early-2021-status-update/logo.png"></center>

One of the runnerups, ``Option #4``, was chosen to become the new logo for MCPIL as well.

<center><img alt="New MCPIL Logo" width="256" src="{{ site.baseurl }}/assets/img/news/early-2021-status-update/mcpil-logo.png"></center>

## MCPI-Reborn (Or ``minecraft-pi-reborn``)

<center><img alt="MCPI-Reborn" width="768" src="{{ site.baseurl }}/assets/img/news/early-2021-status-update/mcpi-reborn.png"></center>

MCPI-Reborn is a collection of mods for Minecraft: Pi Edition. It includes things like a Survival Mode mod, a smooth lighting mod, an animated water mod, and more! It also includes a mod to replace the RPI-specific graphics code with general-purpose graphics code so that MCPI-Reborn can be run in QEMU user-mode. It uses Docker to containerize the environment and uses Debian packages for distribution.

MCPI-Reborn also includes a mod that can convert MCPI into a dedicated server.

It used to be called MCPI-Docker (or ``minecraft-pi-docker``) but was renamed when its main focus became modding.

## MCPIL

<center><img alt="MCPIL-R" width="768" src="{{ site.baseurl }}/assets/img/news/early-2021-status-update/mcpil.png"></center>

MCPIL is a launcher for Minecraft: Pi Edition. Its purpose is to put all MCPI related services and mods all in one place. It has now been rewritten to integrate with MCPI-Reborn. This has made MCPIL much more stable and allows it to run on non-ARM devices.

It also has integration with the multiplayer proxy just like the original. However, it currently lacks support for MCPI-Central and a few other features from the original.

## Website News
The entire website now uses a custom Jekyll theme and has been migrated to Markdown! This makes the theming much more consistent and will make it easier for us to add more pages (like this one).
