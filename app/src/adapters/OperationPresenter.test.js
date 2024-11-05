const { present } = require('./OperationPresenter');

describe('OperationPresenter - present', () => {
  it('should format the results as JSON with tax field', () => {
    const results = [{ tax: "0.00" }, { tax: "100.00" }];
    const expected = JSON.stringify([{ tax: "0.00" }, { tax: "100.00" }]);

    const response = present(results);

    expect(response).toBe(expected);
  });
});
