if ("serviceWorker" in navigator)
{
	navigator.serviceWorker.register("/js/sw.js", {
		"scope": "/"
	}).catch(console.error);
}
