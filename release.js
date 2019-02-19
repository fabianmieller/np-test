const version = require('./package.json').version;
const simpleGit = require('simple-git')();
const replace = require('replace-in-file');

console.log(version);

replace({
    files: 'README.md',
    from: /(\/|@|Version: |\/v)\d+\.\d+\.\d+/g,
    to: '$1' + version
});

simpleGit.add('./*').commit(version).push(['-u', 'origin', 'develop'];