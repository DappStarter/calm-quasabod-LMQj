require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave foot blanket radar snow clump hunt canoe army gentle'; 
let testAccounts = [
"0xd507df5ac709fdf91f917fc51f74a75fa1f0817716f6cd81a420fc847b3eb7a5",
"0x33fc734fd361839710453dc918fcfef66f9e462a2207d11bf6b92ec3d104d02a",
"0x1dc0eaa93c9e6243ffa2bd33ee9a2fc17ee89a854454440c2c275a588b3ee651",
"0x0e8934fd4697ac0262bfd2e0ba9ccc3d752df795e08250535cee5b6e9afd7f45",
"0xb20e9de1661b4788cefeee46eaccd1cbeeee3df4a27bfed89ca78e85018f02ae",
"0xf0430239a1b14fdcbe4a6a10659edb5f1c9f99ac5a9b79d5f874b578edf00ca0",
"0x33cf92c9c66b97854d23335bac8ad2338f1e4e428f3fec0a9d7a7b4d5ee4bfda",
"0xf3e4c378bd510883b814d9d2438a36fea87b1448e3e13f892f81f37132333f8d",
"0xb4d9da23a70e6af1de24ba5e9d18211211c7dcf6ea9c299b8eaca82a67162763",
"0xeb154472b39426b9b39b159a81571119cc9153f0da49ad0828bdf44b30629f13"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

