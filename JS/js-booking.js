alert ("Halo! \n Anda dapat booking tiket disini. \n Pastikan informasi yang Anda isikan benar.");

function formBooking() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var fotoKTP = document.getElementById("fotoKTP").value;
    var tanggal = document.getElementById("tanggal").value;
    var paket = document.getElementById("paket").value;
    var bayar = document.getElementById("bayar").value;
    var jumlah = document.getElementById("jumlah").value;
    var password = document.getElementById("password").value;
   

    if(!nama|| !email|| !fotoKTP|| !password|| !tanggal|| !paket|| !bayar|| !jumlah){
        alert("Mohon isi semua bagian dari form booking!"); 
        return;
    }else{
        alert ("Selamat, Anda berhasil booking.")
        window.location = "../index.html";
    }
}
