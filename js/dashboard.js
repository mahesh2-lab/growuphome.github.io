
const token = localStorage.getItem('key');
if (!token) {
    window.location.href = 'login.html';
}

const button = document.querySelector('button');
button.addEventListener('click', () => {
    localStorage.removeItem('key');
    window.location.href = 'login.html';
});

var decrypted = CryptoJS.AES.decrypt(token, 'key');

console.log(decrypted.toString(CryptoJS.enc.Utf8));

