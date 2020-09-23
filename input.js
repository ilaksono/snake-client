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
  // stdin.once('data', chunk => {
  //   handleUserInput(chunk);
  // });
  
  return stdin;
};

const handleUserInput = (data) => {
  if (data == 'q') {
    console.log('Exiting client');
    return process.exit(22);
  }
  
};

module.exports = {
  setupInput
};