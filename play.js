const { connect } = require('./client');
const { setupInput } = require('./input');

console.log("Connecting ...");
const connectionObj = connect();

setupInput(connectionObj);
