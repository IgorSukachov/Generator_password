function getPassword() {
    let chars = '0123456789abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQESTUWXYZ!@#$%^&*()_+-?<>:{}[]'
    let passwordLenght = 16
    let password = ''

    for (let i = 0; i < passwordLenght; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber+1)
    }
    document.getElementById('password').value = password
    alertBox.innerHTML = 'New Password copied: <br>' + password
}

document.getElementById('btn').addEventListener('click', getPassword)

let alertBox = document.querySelector('.alertBox')

function copyPassword() {
    let copyPassText = document.getElementById('password')
    copyPassText.select()
    copyPassText.setSelectionRange(0,9999)
    document.execCommand('copy')
    alertBox.classList.toggle('active')
    setTimeout(()=>{
        alertBox.classList.toggle('active')
    }, 2000)
}

document.querySelector('.img').addEventListener('click', copyPassword)