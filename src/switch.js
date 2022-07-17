var item = prompt("masukan nama item : nasi, sayur, daging, roti, burger, pizza, softdrink ");

switch(item) {
    case "nasi" :
    case "sayur" :
    case "daging" :
    case "roti" :
        alert("makanan sehat");
        break;
    case "burger" :
    case "pizza" :
    case "softdrink" :
        alert("makanan tidak sehat");
        break;
    default :
        alert("makanan yang anda masukan tidak ada di daftar");
        break;
}