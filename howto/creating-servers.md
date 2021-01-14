---
layout: default
title: Creating Servers
center: false
---

First of all, you must choose which server software to use.

## MCPI-Docker

### Pros
- Survival Mode Support
- Mob AI
- World Generation
- IP-Banning

### Cons
- Player Inventories Are Not Saved
  - An easy workaround is to place your inventory in a chest before logging out.
- No Whitelist

### System Requirements
Debian Buster/Ubuntu 20.04 Or Later

### Instructions
1. Open port 19132 on your router/firewall.
2. Download the [DEB](https://jenkins.thebrokenrail.com/job/minecraft-pi-docker/job/master/lastSuccessfulBuild/artifact/out/deb/) (make sure to download the server deb) and install it.
3. Create a folder for your server and open a terminal in it.
4. Run minecraft-pi-server to start your server.
5. Done! You can now edit server.properties to configure the server.

## PocketMine-MP

### Pros
- Made From Scratch, No Mojang Code
- Player Inventories Are Saved
- Whitelist/Banlist

### Cons
- No Mob AI
- Many Missing Features
- Old Undocumented Codebase
- Superflat World Generation Only

### System Requirements:
Modern Debian/Ubuntu

### Instructions
1. Open port 19132 on your router/firewall.
2. Install build-essential.
3. Create a folder for your server.
4. Download and extract [PocketMine-MP](https://github.com/MCPI-Devs/PocketMine-MP/archive/thebrokenrail.zip) into your server's folder.
5. Open a terminal in your server's folder.
6. Run ./compile_php.sh to compile PocketMine's version of PHP and its required extensions.
7. Run ./start.sh to start your server.
8. Done! You can now edit server.properties to configure the server.
