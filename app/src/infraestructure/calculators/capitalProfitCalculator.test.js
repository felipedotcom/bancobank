const { processOperation } = require('./capitalProfitCalculator');

describe('capitalProfitCalculator - processOperation', () => {
  it('should handle buy operation and update weighted average and stocks', () => {
    const state = { actualStocks: 100, weightedAverage: 10, tax: "0.00", accumulatedLoss: 0 };
    const operation = { operation: "buy", quantity: 50, "unit-cost": 20 };

    const result = processOperation(operation, state);

    expect(result.actualStocks).toBe(150);
    expect(result.weightedAverage).toBe(13.33);
    expect(result.tax).toBe("0.00");
  });

  it('should accumulate loss when a sell operation results in a loss', () => {
    const state = { actualStocks: 100, weightedAverage: 20, tax: "0.00", accumulatedLoss: 0 };
    const operation = { operation: "sell", quantity: 50, "unit-cost": 10 };

    const result = processOperation(operation, state);

    expect(result.accumulatedLoss).toBe(500);
    expect(result.tax).toBe("0.00");
  });
});
