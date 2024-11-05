function processOperations(operations, repositorySave, calculatorProcess) {
  const results = [];
  let state = {
    actualStocks: 0,
    weightedAverage: 0,
    tax: "0.00",
    accumulatedLoss: 0,
  };

  for (const operation of operations) {
    state = calculatorProcess(operation, state);
    repositorySave(operation);
    results.push(state);
  }

  return results;
}

module.exports = { processOperations };