const { SIGINT } = require('constants');
const readline = require('readline');

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

  // stdin.resume();
  // const rl = readline.createInterface({
  //   input: process.stdin,
  //   output: process.stdout
  // });
  stdin.on('data', (data) => {
    handleUserInput(data);
  })
  // stdin.once('data', chunk => {
  //   handleUserInput(chunk);
  // });

  return stdin;
};

const handleUserInput = (data) => {
  if (data === '\u0003') {
    console.log('Exiting client by CTRL C');
    return process.exit(22);
  }
  if (data === '\u001B\u005B\u0041') {
    process.stdout.write('\nup\n');
  }
  if (data === '\u001B\u005B\u0043') {
    process.stdout.write('\nright\n');
  }
  if (data === '\u001B\u005B\u0042') {
    process.stdout.write('\ndown\n');
  }
  if (data === '\u001B\u005B\u0044') {
    process.stdout.write('\nleft\n');
  }

};

module.exports = {
  setupInput
};