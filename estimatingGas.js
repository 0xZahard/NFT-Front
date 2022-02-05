  // Get the estimated gas from the adopt method
  try {
    methodGasPrice = await this.contract.methods.adopt(adoptNum).estimateGas({
      value: price,
      from: account
    });
  } catch (err) {
    console.log("ERROR Method Gas Price");
  }

  try {
    currentGasPrice = await this.web3.eth.getGasPrice();
  } catch (err) {
    console.log("ERROR Current Gas Price");
  }

  // Buffer gas with a value that makes sense for your project
  // has pros and cons - always do your own research
  const sendTransactionData = {
    // increase the gas limit  
    gas: parseInt(1.13 * methodGasPrice),
    // increase the gas price  
    gasPrice: parseInt(1.13 * currentGasPrice),
    from: account,
    value: price
  };