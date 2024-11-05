function present(results) {
  return JSON.stringify(results.map(result => ({ tax: result.tax })));
}

module.exports = { present };
