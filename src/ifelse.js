var jumlahAngkot = 10;
var angkotBeroprasi = 6;
var angkotLembur = 8;
var noAngkot = 1;

for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
    if(noAngkot <= angkotBeroprasi) {
        console.log("Angkot No. " + noAngkot + " Beroprasi dengan baik.");
    } else if (noAngkot === angkotLembur) {
        console.log("Angkot No. " + noAngkot + " Sedang lembur.")
    } else {
        console.log("Angkot No. " + noAngkot + " Sedang tidak beroprasi.")
    }
}

// var i = prompt("Masukan angka")

// if (i % 2 === 0) {
//     alert("Genap")
// } else if (i % 2 === 1) {
//     alert("Ganjil")
// } else {
//     alert("Masukan angka yang benar")
// }