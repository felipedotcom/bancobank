const { handleOperations } = require('./OperationController');

describe('OperationController - handleOperations', () => {
  const mockProcessOperations = jest.fn();
  const mockRepositorySave = jest.fn();
  const mockCalculatorProcess = jest.fn();
  const mockPresent = jest.fn();

  it('should parse input, process operations, and return presented result', () => {
    const input = JSON.stringify([{ operation: "buy", quantity: 100, "unit-cost": 10 }]);
    const results = [{ tax: "0.00" }];
    
    mockProcessOperations.mockReturnValue(results);
    mockPresent.mockReturnValue(JSON.stringify([{ tax: "0.00" }]));

    const response = handleOperations(input, mockProcessOperations, mockRepositorySave, mockCalculatorProcess, mockPresent);

    expect(mockProcessOperations).toHaveBeenCalledWith(
      JSON.parse(input),
      mockRepositorySave,
      mockCalculatorProcess
    );
    expect(mockPresent).toHaveBeenCalledWith(results);
    expect(response).toBe(JSON.stringify([{ tax: "0.00" }]));
  });
});
