const version = require('./package.json').version;
const replace = require('replace-in-file');

replace({
    files: 'README.md',
    from: /(\/|@|Version: |\/v)\d+\.\d+\.\d+/g,
    to: '$1' + version
});