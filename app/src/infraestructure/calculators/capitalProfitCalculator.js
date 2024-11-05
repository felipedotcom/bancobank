function processOperation(operation, state) {
  if (operation.operation === "buy") {
    return processBuyOperation(operation, state);
  } else if (operation.operation === "sell") {
    return processSellOperation(operation, state);
  }
  return state;
}

function processBuyOperation(operation, state) {
  const newWeightedAverage = calculateAvgCost(state.actualStocks, state.weightedAverage, operation.quantity, operation["unit-cost"]);
  const newActualStocks = state.actualStocks + operation.quantity;

  return {
    ...state,
    weightedAverage: newWeightedAverage,
    actualStocks: newActualStocks,
    tax: "0.00",
  };
}

function processSellOperation(operation, state) {
  const totalSellPrice = operation.quantity * operation["unit-cost"];
  const totalCost = operation.quantity * state.weightedAverage;
  const profit = totalSellPrice - totalCost;

  let taxableProfit = profit;
  let newAccumulatedLoss = state.accumulatedLoss || 0;

  if (profit > 0) {
    if (newAccumulatedLoss > 0) {
      if (profit > newAccumulatedLoss) {
        taxableProfit = profit - newAccumulatedLoss;
        newAccumulatedLoss = 0;
      } else {
        taxableProfit = 0;
        newAccumulatedLoss -= profit;
      }
    }
  } else {
    newAccumulatedLoss += Math.abs(profit);
    taxableProfit = 0;
  }

  let tax = 0;
  if (requiresTaxPayment(totalSellPrice) && taxableProfit > 0) {
    tax = taxCalculation(taxableProfit);
  }

  return {
    actualStocks: state.actualStocks - operation.quantity,
    weightedAverage: state.weightedAverage,
    accumulatedLoss: newAccumulatedLoss,
    tax: tax.toFixed(2),
  };
}

function calculateAvgCost(actualStocks, weightedAverage, quantity, unitCost) {
  const totalValue = actualStocks * weightedAverage + quantity * unitCost;
  const totalQuantity = actualStocks + quantity;
  return Math.round((totalValue / totalQuantity) * 100) / 100;
}

function requiresTaxPayment(totalSellPrice) {
  return totalSellPrice > 20000;
}

function taxCalculation(value) {
  return value * 0.2;
}

module.exports = { processOperation };
