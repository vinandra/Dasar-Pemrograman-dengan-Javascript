function jumlahVolumeKubus(a, b) {
    var volumeA;
    var volumeB;
    var total;

    var volumeA = a * a * a;
    var volumeB = b * b * b;

    var total = volumeA +volumeB;

    return total;
}

console.log(jumlahVolumeKubus(3,4))