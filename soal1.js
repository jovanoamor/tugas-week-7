// untuk memasukan data
const fungsi = require('./fungsi');

const sisiSquare = 2;
const PanjangRectangle = 3 ;
const LebarRectangle  = 5;

console.log(`Luas Persegi : ${fungsi.areaSquare(sisiSquare)}`);
console.log(`Keliling persegi: ${fungsi.kelilingSquare(sisiSquare)}`);
console.log(`Luas persegi panjang: ${fungsi.areaRectangle(PanjangRectangle, LebarRectangle)}`);
console.log(`Keliling persegi panjang: ${fungsi.kelilingRectangle(PanjangRectangle, LebarRectangle)}`);