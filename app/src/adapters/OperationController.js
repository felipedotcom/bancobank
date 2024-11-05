function handleOperations(input, processOperations, repositorySave, calculatorProcess, present) {
  const operations = JSON.parse(input);
  const results = processOperations(operations, repositorySave, calculatorProcess);
  return present(results);
}

module.exports = { handleOperations };
