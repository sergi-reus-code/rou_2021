var exec = require('child_process').exec;

exec('node C:\\Users\\Path\\to\\File', function (err, stdout, stderr) {
    if (err) {
        throw err;
    }
})