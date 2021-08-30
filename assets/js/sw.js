function cache(req)
{
	caches.open("mcpi-revival-v0").then(function (cache) {
		return cache.match(req).then(function (res) {
			return res || fetch(req).then(function (res) {
				cache.put(req, res.clone());
				return res;
			});
		});
	})
}

function mkre(str)
{
	let base = "https://[a-zA-Z.-]+(:[0-9]+)?";
	return new RegExp(`^${base}/${str}$`);
}

self.addEventListener("fetch", function (event) {
	let url = event.request.url;
	let re = mkre`assets/(fonts/(.*).woff|img/(news/(.*)|(wall|logo)).png)`;
	if (url.match(re))
	{
		event.respondWith(cache(event.request));
	} else
	{
		event.respondWith(fetch(event.request));
	}
});
