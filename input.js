//setup interface to handle user input from stdin
const { moves } = require('./constants');

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on("data", (key) => {
    if (key === '\u0003') {
      process.exit();
    }
    connection.write(moves[key]);
    // if (key === 'w') {
    //   connection.write("Move: up");
    // } else if (key === 'a') {
    //   connection.write("Move: left");
    // } else if (key === 's') {
    //   connection.write("Move: down");
    // } else if (key === 'd') {
    //   connection.write("Move: right");
    // } else if (key === 'm') {
    //   connection.write("Say: Outta my way!");
    // } else if (key === 'e') {
    //   connection.write("Say: Eat my dust!");
    // }
  });
  return stdin;
};

module.exports = { setupInput };