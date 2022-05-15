function check() {
    let nameInput = document.getElementById('name');
    let passwordInput = document.getElementById('password');
    let telInput = document.getElementById('tel');
    let emailInput = document.getElementById('email');

    document.getElementById('errorMessage').innerHTML= "";


    if (nameInput.value == '') {
        document.getElementById('errorMessage').innerHTML += "Bitte füllen Sie das Namensfeld aus<br>"
    }

    if (passwordInput.value == '' || password.length < 7) {
        document.getElementById('errorMessage').innerHTML += "Bitte füllen Sie das Passwordfeld aus<br>"
    }

    if (telInput.value == '') {
        document.getElementById('errorMessage').innerHTML += "Bitte füllen Sie das Telefonnimmernfeld aus<br>"
    }

    if (emailInput.value == '') {
        document.getElementById('errorMessage').innerHTML += "Bitte füllen Sie das E-mail-Feld aus<br>"
    }

    if (nameInput.value && telInput.value && emailInput.value && passwordInput.value) {
        alert(`Herzlich willkommen, ${nameInput.value}`)
    }
}