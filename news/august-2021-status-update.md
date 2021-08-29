---
layout: default
title: August 2021 Status Update
center: false
---

A lot has happened since we [last met](early-2021-status-update.html).
We present, once again, a new status update on the past, present, and
future of our projects!

## The MCPIL Invasion
Around Febraury, shortly after MCPIL's [reboot](august-2021-status-update.html#mcpil),
and after a few discussions about its (renewed) internal design, it was
deemed unmaintainable for much longer, and work started on rewritting it
using languages and toolkits that were more familiar for the Lead Developers.

A few days after that, two proof of concepts were proposed to replace MCPIL,
[jMCPIL](https://github.com/MCPI-Revival/jMCPIL) (written in Java using
Swing/AWT), and [gMCPIL](https://github.com/MCPI-Revival/gMCPIL)
(at that time written in C using GTK+). The idea was to make people vote
for their favourite proposal, but the voting was never effectuated and
both programs (now collectively refered to as "the MCPILs" or j/gMCPIL)
were keep as alternatives.

Then the then-current MCPIL, previously known as MCPIL-R, was officially
deprecated, and the repository was archived shortly after.

{% include fig.html path="august-2021-status-update/jmcpil.png" title="jMCPIL" %}
{% include fig.html path="august-2021-status-update/gmcpil.png" title="gMCPIL" %}

## The Yeeting of Docker
Starting in March, after the initial work on the MCPIL replacements, yet
another core project went under a heavy refactoring work: due to the
difficulty that Docker presented to most end users, MCPI-Reborn's developer,
TheBrokenRail, started working on removing its dependency on Docker. This
was going to be a big milestone, so it was refered to as MCPI-Reborn 2.0
since its announcement.

Here are some pre-release screenshots, for your delight and enjoyment:

{% include fig.html path="august-2021-status-update/lang.png" title="It's trying to tell us something..." %}
{% include fig.html path="august-2021-status-update/know.png" title="Good to know it's still in alpha" %}
{% include fig.html path="august-2021-status-update/rakcraft.png" title="RAKCRAFT" %}
{% include fig.html path="august-2021-status-update/legit.png" title="Seems legit." %}

After some months, in June, MCPI-Reborn 2.0 was officially released. To
achieve its goal of removing the Docker dependency, this new version introduced
a whole new architecture and components, most notably the Media Layer Proxy,
used in non-`armhf` architectures to cross architectural boundaries and
allow MCPI to use the underlying graphics stack.

This also extended support for easily building MCPI-Reborn for other
architectures, including `arm64`.

## [FILLME: Some stuff that happened after the yeeting of Docker]
[Building contest, gMCPIL rewrite, builtin MCPI-Reborn multiplayer]

## Website News
The website has been partially redesigned to be more responsive in mobile
devices and big screens. It has also been cleaned up from legacy documentation.
