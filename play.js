const { SIGINT } = require('constants');
const readline = require('readline');

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.on('data', (data) => {
    handleUserInput(data);
  })
  return stdin;
};

const handleUserInput = (data) => {
  if (data === 'SIGINT') {
    console.log('Exiting client');
    process.exit();
  }
  
};

const { connect } = require('./client');
console.log('Connecting ...');
connect();
setupInput();

