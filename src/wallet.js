module.exports = {
  messagePrefix: '\x18SocialSend Signed Message:\n',
  bip32: {
    public: 0x02fe52f8,
    private: 0x02fe52cc
  },
  pubKeyHash: 0x3F,
  scriptHash: 0x0D,
  wif: 0xD4,
  dustThreshold: 5460 // https://github.com/SocialSend/socialsendcore-lib/blob/master/lib/transaction/transaction.js#L66
}
