console.log("File 3");
// tambah kondisi dalam function
let nama = () => {
    let yourname = prompt('Masukkan Nama');

    if (yourname == "Andri") {
        console.log(`Welcome {$yourname}`);
    } else {
        console.log(`Welcome {$yourname} `);
    }
}