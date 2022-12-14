const IP = 'localhost';
const PORT = 50541;

//Object to map keys to moves
const moves = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
  m: "Say: Out of my way!",
  e: "Say: Eat my dust!",
};

module.exports = { IP, PORT, moves };