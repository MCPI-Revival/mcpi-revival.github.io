var user = "MCPI-Devs";
var pages;
var i = 0;
var repos = Array();

function request(url, cb)
{
	fetch(`https://api.github.com${url}`).then(function (res) {
		return res.json();
	}).then(function (data) {
		cb(data);
	});
}

function output(repos)
{
	var total = 0;
	repos.forEach(function (repo) {
		total += repo.stargazers_count;
	});
	console.log(total / 1000 * 100);
}

function check(res)
{
	repos = repos.concat(res);
	pages--;
	if (pages == 0)
	{
		output(repos);
	}
}

request("/users/MCPI-Devs", function (res) {
	if (!res.public_repos)
	{
		return -1;
	}
	pages = Math.ceil(res.public_repos / 100);
	while (i < pages)
	{
		request(`/users/MCPI-Devs/repos?per_page=100&page=${(i + 1)}`, check);
		i++;
	}
});
