//bikin funsi buat perhitungan
function areaSquare(sisi) {
    return sisi * sisi;
}

function kelilingSquare(sisi) {
    return 4 * sisi;
}

function areaRectangle(panjang, lebar) {
    return panjang * lebar;
}

function kelilingRectangle(panjang, lebar) {
    return 2 * (panjang + lebar);
}

module.exports = {
    areaSquare,
    kelilingSquare,
    areaRectangle,
    kelilingRectangle
};
