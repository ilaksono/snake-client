const { setupInput } = require('./input');
const { connect } = require('./client');
console.log('Connecting ...');
// connect();
setupInput(connect());

// setTimeout((function() {
//   console.log('Exiting client');
//   return process.exit(22);
// }), 8000);