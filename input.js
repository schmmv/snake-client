//setup interface to handle user input from stdin
const { moves } = require('./constants');

//stores the active TCP connetion object
let connection;
/**
 * Callback function for stdin.on event handler
 * Terminates stdin if ctrl + c is input
 * Sends moves to server
 * @param {string} key character input from the keyboard by the user
 */
const handleUserInput = function(key) {
  if (key === '\u0003') { //ctrl + c input to terminate
    process.exit();
  }
  connection.write(moves[key]);
};
/**
 * 
 * @param {object} conn object that lets me interact with the server
 * @returns {stdin} stdin object that allows listening for and reacting to keyboard input
 */
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