const readline = require("readline");

function CLI() {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });

  return {
    run: (callback) => readlineInterface.on("line", callback),
    log: (message) => console.log(message),
  };
}

module.exports = { CLI };
