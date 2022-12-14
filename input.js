//setup interface to handle user input from stdin
const { moves } = require('./constants');

//stores the active TCP connetion object
let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') { //ctrl + c input to terminate
    process.exit();
  }
  connection.write(moves[key]);
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };