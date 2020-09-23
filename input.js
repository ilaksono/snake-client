const { SIGINT } = require('constants');
const readline = require('readline');
// const { connect } = require('./client');

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
  if (data === '\u001B\u005B\u0041' || data === 'w') {
    // process.stdout.write('\nup\n');
    connection.write('Move: up');
  }
  if (data === '\u001B\u005B\u0043' || data === 'd') {
    // process.stdout.write('\nright\n');
    connection.write('Move: right');
  }
  if (data === '\u001B\u005B\u0042' || data === 's') {
    // process.stdout.write('\ndown\n');
    connection.write('Move: down');
  }
  if (data === '\u001B\u005B\u0044' || data === 'a') {
    // process.stdout.write('\nleft\n');
    connection.write('Move: left');
  }

};

module.exports = {
  setupInput
};