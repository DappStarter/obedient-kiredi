require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt basket flip spot finger deliver remember honey include clinic bottom gate'; 
let testAccounts = [
"0x0be9015cbdd94c49809df9ac6ffad40586933fd9e059cc5c3cea9abda4945da1",
"0x065759a492e2fa7d7606e27aaca3d1b2fe2cbf837e1b1b6030c5cadc91b96a8d",
"0xc37cb1bc37253d6249db61546f7463ec70bb109a38e37b1e29b34af3318be81c",
"0xf0358e67f19f6eee69a11cced631fb04e8e1721e74486f2a93db7b9a8adcd21e",
"0x00fb30abe0aa34e42c953a60b1a5c7623d0307d731ff5704df460aa34df82d6e",
"0x21bb3b753901b6015123dc38d8856cbfa3a6ab9a1023a01ce0a018113a3d8df6",
"0x0aa1abb16896de3c1efb8d252ca8f8701ce189d23170f940416c8b6852a1c438",
"0xffa0db047fa34da4d6399170ec786799d10e64352c15196aad0a53e705c18e2c",
"0x216345efbe5062d39b5b2fb759e16bd24519903b5392ccc529c021fa9a38fb23",
"0xa95e7b25220fec46f435846dd4a93f5c872323a0dc05c2f5c7d79ac9b3e29a68"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
