const ghpages = require("gh-pages");

const branch = "master";
const repo = "https://github.com/shafehorg/shafehorg.github.io.git";
const visible = "public";
const repoDetails = { branch };
const callback = () => console.log('Deploy Complete!');

const options = [visible, repoDetails, callback];

ghpages.publish( ...options )
