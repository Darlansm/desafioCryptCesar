const sha1 = require ('js-sha1');

//sha1 ('A rápida raposa marrom pula sobre o cachorro preguiço');
var hash = sha1.create();
var hash1 = sha1.create();

hash1.update('A rápida raposa marrom pula sobre o cachorro preguiçoso')

console.log(hash1.hex())
console.log('// 2fd4e1c67a2d28fced849ee1bb76e7391b93eb12')


hash.update('中文');

console.log(hash.hex())
console.log('// 7be2d2d20c106eee0836c9bc2b939890a78e8fb3')

console.log("// da39a3ee5e6b4b0d3255bfef95601890afd80709")
console.log(typeof hash.update())
console.log(hash.hex())
hash.hex();
console.log (hash)



sha1 (''); // da39a3ee5e6b4b0d3255bfef95601890afd80709
sha1 ('A rápida raposa marrom pula sobre o cachorro preguiçoso'); // 2fd4e1c67a2d28fced849ee1bb76e7391b93eb12
sha1 ('A rápida raposa marrom pula sobre o cachorro preguiçoso.'); // 408d94384216f890ff7a0c3528e8bed1e0b01621
 
// Ele também suporta codificação UTF-8
sha1 ('中文'); // 7be2d2d20c106eee0836c9bc2b939890a78e8fb3
 
// Também suporta os bytes `Array`,` Uint8Array`, `ArrayBuffer`
sha1 ([]); // da39a3ee5e6b4b0d3255bfef95601890afd80709
sha1 (new Uint8Array ([])); // da39a3ee5e6b4b0d3255bfef95601890afd80709
 
// Saída diferente
sha1 (''); // da39a3ee5e6b4b0d3255bfef95601890afd80709
sha1.hex (''); // da39a3ee5e6b4b0d3255bfef95601890afd80709
sha1.array (''); // [218, 57, 163, 238, 94, 107, 75, 13, 50, 85, 191, 239, 149, 96, 24, 144, 175, 216, 7, 9]
sha1.digest (''); // [218, 57, 163, 238, 94, 107, 75, 13, 50, 85, 191, 239, 149, 96, 24, 144, 175, 216, 7, 9]
sha1.arrayBuffer (''); // ArrayBuffer

