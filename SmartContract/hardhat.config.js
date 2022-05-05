require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: 'HTTP://127.0.0.1:7545',
      accounts: ['157c0a0b9e89da9fcb07dd4dcdc37ca76bd533e071f703950d779ab771cb3358'],
    },
  },
};

