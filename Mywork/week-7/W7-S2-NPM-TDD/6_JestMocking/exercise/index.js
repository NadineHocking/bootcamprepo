const { getUserRepos } = require("./github");

// TODO: Enter your GitHub username
const gitHubUser = "NadineHocking";

getUserRepos(gitHubUser).then((repos) => {
  console.log(repos);
});
