var jumlahAngkot = 10;
var angkotBeroprasi = 6;
var noAngkot = 1;

while (noAngkot <= angkotBeroprasi) {
    console.log("Angkot No. " + noAngkot + " Beroprasi dengan baik.");
    noAngkot++;
}

for (angkotBeroprasi = angkotBeroprasi + 1; angkotBeroprasi <= jumlahAngkot; angkotBeroprasi++) {
    console.log("Angkot No. " + angkotBeroprasi + " Sedang tidak beroprasi.")
}