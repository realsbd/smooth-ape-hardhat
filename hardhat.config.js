require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.2',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/4kriMvExPE92i2oyIo4B4vF8gWNDYaof',
      accounts: ['849453122785c23946f36692074b582ec774effc3ded14b4bdca6b1db0a3d4cd'],
    },
  },
};
