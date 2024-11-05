const { processOperations } = require('./handleOperationsUseCase');

describe('handleOperationsUseCase - processOperations', () => {
  const mockRepositorySave = jest.fn();
  const mockCalculatorProcess = jest.fn((operation, state) => ({
    ...state,
    tax: "0.00",
    actualStocks: state.actualStocks + operation.quantity,
  }));

  it('should process each operation and update state correctly', () => {
    const operations = [{ operation: "buy", quantity: 100, "unit-cost": 10 }];
    const expectedResults = [{ actualStocks: 100, weightedAverage: 0, tax: "0.00", accumulatedLoss: 0 }];

    const results = processOperations(operations, mockRepositorySave, mockCalculatorProcess);

    expect(mockCalculatorProcess).toHaveBeenCalledWith(operations[0], {
      actualStocks: 0,
      weightedAverage: 0,
      tax: "0.00",
      accumulatedLoss: 0
    });
    expect(mockRepositorySave).toHaveBeenCalledWith(operations[0]);
    expect(results).toEqual(expectedResults);
  });
});
