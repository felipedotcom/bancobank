#!/usr/bin/env node

const { CLI } = require("./src/frameworks/cli/cli");
const { handleOperations } = require("./src/adapters/OperationController");
const { processOperations } = require("./src/core/usecases/handleOperationsUseCase");
const { saveOperation } = require("./src/infraestructure/repositories/InMemoryOperationRepository");
const { processOperation } = require("./src/infraestructure/calculators/capitalProfitCalculator");
const { present } = require("./src/adapters/OperationPresenter");

const cli = CLI();

cli.run((input) => {
  const response = handleOperations(input, processOperations, saveOperation, processOperation, present);
  cli.log(response);
});
