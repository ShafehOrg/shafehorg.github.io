const ghpages = require("gh-pages");

const branch = "master";
const dir = "public";
const repoDetails = { branch };
const callback = () => console.log('Deploy Complete!');

const options = [dir, callback];

ghpages.publish( ...options )
