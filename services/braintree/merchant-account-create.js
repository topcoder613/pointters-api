const gateway = require('./client');

module.exports = async( merchantAccountParams ) => {
  try {
    //console.log('gateway.clientToken ', gateway.clientToken);
    const result = await gateway.merchantAccount.create(merchantAccountParams);

    return result;
  } catch (error) {
    console.log('error occur ',error);
    return {error};
  }
}
