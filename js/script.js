function replaceName() {
    let name = prompt("Siapa nama anda?", "");
    if (name) {
        document.getElementById("welcome-title").innerText = "Hi " + name + ", Welcome To My Website";
    }
}

function checkVisitor() {
    let savedName = localStorage.getItem("visitorName");

    if (!savedName) {
        replaceName();
    } else {
        document.getElementById("welcome-title").innerText = savedName;
    }
}

function replaceName() {
    let name = prompt("Siapa nama anda?", "");
    if (name) {
        localStorage.setItem("visitorName", name);
        document.getElementById("welcome-title").innerText = name;
    }
}


checkVisitor();


document.getElementById('mainForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nama = document.getElementById('in-nama').value;
    const tgl = document.getElementById('input-tgl').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const pesan = document.getElementById('input-pesan').value;

    if (nama == "" || tgl == "" || pesan == "") {
        alert("Mohon lengkapi semua data!");
    } else {

        document.getElementById('res-time').innerText = new Date().toLocaleString();
        document.getElementById('res-nama').innerText = nama;
        document.getElementById('res-tgl').innerText = tgl;
        document.getElementById('res-gender').innerText = gender;
        document.getElementById('res-pesan').innerText = pesan;
    }
});
