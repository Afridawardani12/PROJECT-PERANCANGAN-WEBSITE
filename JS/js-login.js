alert ("Halo! \n Sebelum Anda booking, silahkan masuk terlebih dahulu. \n Pastikan informasi yang Anda berikan benar.");

function formLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(!username|| !password){
        alert("Mohon isi semua bagian dari form login!"); 
        return;
    }else{
        alert ("Selamat, Anda berhasil masuk ke akun Anda.")
        window.location = "../index.html";
    }
}