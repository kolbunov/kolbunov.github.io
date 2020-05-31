const desiredRepo = "kolbunov.github.io";
const dateTagClass = ".date";

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function()
{
if (this.readyState == 4 && this.status == 200)
{
	let repos = JSON.parse(this.responseText);

	repos.forEach((repo)=>{
	if (repo.name == desiredRepo)
	{
		var lastUpdated = new Date(repo.updated_at);
		var date = lastUpdated.getUTCDate();
		var month = lastUpdated.getUTCMonth() + 1;
		var year = lastUpdated.getUTCFullYear();
		var hours = lastUpdated.getUTCHours();
		var minute = lastUpdated.getUTCMinutes();
		var second = lastUpdated.getUTCSeconds();
		$(dateTagClass).text(`Last Updated: ${date}.${month}.${year} ${hours}:${minute}:${second}`);
	}
	});
}
};
xhttp.open("GET", "https://api.github.com/users/kolbunov/repos", true);
xhttp.send();
