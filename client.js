const net = require('net');

//establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });
  
  conn.setEncoding('utf8'); //interpret incoming data as text
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: MMS");
    // conn.write("Move: up");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 1000);
  });
  conn.on("data", () => {
    console.log("you ded cuz you idled");
  })
  return conn;
};

module.exports = { connect };