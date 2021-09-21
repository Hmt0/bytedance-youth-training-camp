const { promisify } = require('util');
module.exports.clone = async function (repo, desc) {
    const download = promisify(require("download-git-repo"))
    await download(repo, desc);
};