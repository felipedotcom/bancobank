const operations = [];

function saveOperation(operation) {
  operations.push(operation);
}

function getOperations() {
  return operations;
}

module.exports = { saveOperation, getOperations };
