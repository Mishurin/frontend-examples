const childProcess = require('child_process');
const argv = require('optimist').argv;
const glob = require('glob');

let commands = [];

if (argv.d) {
    glob(`./webpack/${argv.d}_*`, { nodir: false }, (er, files, a, b) => {
        if(files.length) {
            commands.push(`cd ${files[0]}`);
        }
        if (argv.w) {
            commands.push(argv.w);
        }
        run();
    });
}

function run() {
    let toBeRun = commands.join(' && ');
    console.log(`Executing...\n${toBeRun}\n`)
    let child = childProcess.exec(commands.join('&&'), (e, stdout, stderr) => {
        console.log(stdout);
    });
    child.stdout.on('data', function(data) {
        console.log(data.toString()); 
    });
}