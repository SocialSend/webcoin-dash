// blockchain definition

var u = require('socialsend-util')

// definition of the genesis block's header
var genesisHeader = {
  version: 1,
  prevHash: u.nullHash,
  merkleRoot: u.toHash('b1500a04ebdd55c982f0064e12da90245184f053f86981618631d429e3b70897'),
  time: 1510940390,
  bits: 0x1e0fffff,
  nonce: 614549
}

// selected block headers for verifying initial sync
var checkpoints = [
  {
    height: 200000,
    header: {
      version: 3,
      prevHash: u.toHash('b5940dfad1a49490942db4c6a72025908840a93be6286ab8cec541aa97d4f911'),
      merkleRoot: u.toHash('a67f7c3c74eb590d15bb8ebacd95d46ead102ba3517aae7e5683d0f986798061'),
      time: 1523321644,
      bits: 0x1b009ea0,
      nonce: 0
    }
  }
]

// settings passed to Blockchain objects
// (see https://github.com/mappum/blockchain-spv)
module.exports = {
  genesisHeader,
  checkpoints
}
