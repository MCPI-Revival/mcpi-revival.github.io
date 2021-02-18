---
layout: default
title: Joining Servers
center: false
---

First of all, you will need to get the IP and the port of the server. We host a curated list of good servers [here]({{ site.baseurl }}/servers.html). The "manual" method requires Python 3.7 or superior. While the Launcher requires Python 3.7.

## Using The Launcher (recommended)
You will need to download and install the [launcher](https://github.com/MCPI-Revival/MCPIL). There is a "Multiplayer" tab in the launcher, it's a GUI (Graphical User Interface) for the proxy, and you simply need to put the server IP in the "IP" box and the port in "Port". Then, just click "Save" and launch the game from the "Play" tab. Click "Join Game" in MCPI and now you can join the server!

## Manually (reccomended for connecting to multiple servers)
You will need to download the [proxy](https://github.com/MCPI-Revival/proxy/). Then navigate to the folder where it is and use it as following:

```sh
mcpip server_addr server_port scr_port
```

Remember to replace ``server_addr`` with the server IP. (Optional) If the server uses a port different from the default(19132), replace ``server_port`` with the server port. (Optional) If you want to use a specific on your device to connect to the server, replace ``scr_port`` with the port you want.

Example uses below:

Connecting to a server with the default port:
```sh
mcpip thebrokenrail.com
```

Connecting to a server with a different port:
```sh
mcpip thebrokenrail.com 19158
```

Connecting to a server with a different source port(eg. you have another proxy instance running)
```sh
mcpip thebrokenrail.com 19132 19134
```
