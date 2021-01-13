alert ("Halo! \n Sebelum Anda booking, silahkan mendaftar terlebih dahulu. \n Pastikan informasi yang Anda berikan benar.");

function formDaftar() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var konfirm = document.getElementById("konfirm").value;

    if(!nama|| !email|| !username|| !password|| !konfirm){
        alert("Mohon isi semua bagian dari form pendaftaran!"); 
        return;
    }else{
        alert ("Selamat, Anda berhasil.")
        window.location = "../index.html";
    }
}

