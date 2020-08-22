var client;
var interval;

client = new Discord.Client({
	"transport": "websocket"
});

/*var email = prompt("email");
var password = prompt("password");*/

/*email
password*/

body = {
	"email": new String(),
	"password": new String(),
	"undelete": false,
	"captcha_key": null,
	"login_source": null,
	"gift_code_sku_id": null
};

var headers = new Headers({
	"User-Agent": "Mozilla/5.0 (X11; Linux armv7l) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Raspbian",
	"X-Super-Properties": "",
	"Content-Type": "application/json"
});

client.once("ready", function () {
	client.user.setActivity("Minecraft Pi", {
		"type": "PLAYING"
	});
	interval = setInterval(function () {
		client.user.setActivity("Minecraft Pi", {
			"type": "PLAYING"
		});
	}, 1000 * 3);
});

function set_rpc()
{
	body.email = document.getElementById("email").value;
	body.password = document.getElementById("password").value;
	console.log(body.email);
	console.log(body.password);

	fetch("https://discordapp.com/api/v8/auth/login", {
		"method": "POST",
		"headers": headers,
		"body": JSON.stringify(body)
	}).then(function (res) {
		return res.json();
	}).catch(function (err) {
		console.log(err);
	}).then(function (data) {
		console.log(data);
		client.login(String(data.token));
	});

	return;
}

document.getElementById("update").addEventListener("click", set_rpc);
