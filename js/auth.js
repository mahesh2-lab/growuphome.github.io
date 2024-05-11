const token = localStorage.getItem('key');
if (token) {
    window.location.href = 'index.html';
}

async function hashPassword(password) {
    const hash = crypto.subtle.digest('SHA-256', new TextEncoder().encode(password));
    const buffer = await hash;
    const hashArray = Array.from(new Uint8Array(buffer));
    return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
}


function SignUp() {
    const form = document.getElementById('form');

    form.onsubmit = async (e) => {
        try {

            e.preventDefault();

            const password = document.getElementById('password').value;
            const cpassword = document.getElementById('cpassword').value;
            const email = document.getElementById('email').value;
            const username = document.getElementById('username').value;

            if (password !== cpassword) {
                alert('Passwords do not match');
                return false;
            }
            else {

                let hashpassword = await hashPassword(password);

                let datetime = new Date().toLocaleString();

                const formData = new FormData(form);

                formData.delete("password");
                formData.delete("cpassword");
                formData.append("password", hashpassword);
                formData.append("datetime", datetime);

                const values = Object.fromEntries(formData.entries());

                let check = await fetch(`https://sheetdb.io/api/v1/smqraiq21mtdu/search_or?email=${email}&username=${username}`);


                let valid = await check.json();


                if (valid.length > 0) {
                    if (valid[0].email == email) {
                        throw new Error("User already exists please login or use another email");
                    }
                    else if (valid[0].username == username) {
                        throw new Error("Username already exists please use another username");
                    }
                }

              
             

                let response = await fetch('https://sheetdb.io/api/v1/smqraiq21mtdu', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values)
                });



                let result = await response.json();

                if (result.error) {
                    throw new Error('Error in registration');
                }
                else {
                    alert('Registration successful');
                    window.location.href = 'login.html';

                }
            }

        } catch (error) {
            alert(error);

        }
    };
}

function login() {

    const login = document.getElementById('login');


    login.onsubmit = async (e) => {
        try {

            e.preventDefault();

            const password = document.getElementById('password').value;
            const email = document.getElementById('email').value;

            if (!password || !email) {
                alert('please enter details');
                return false;
            }
            else {

                let hashpassword = await hashPassword(password);

                let response = await fetch(`https://sheetdb.io/api/v1/smqraiq21mtdu/search_or?email=${email}`);



                let result = await response.json();


                if (result.error) {
                    throw new Error(data.error);
                }
                var encrypted = CryptoJS.AES.encrypt(result[0].username, 'key');


                if (result[0].password == hashpassword) {
                    localStorage.setItem("key", encrypted);
                    alert('Login successful');
                    window.location.href = 'index.html';

                }
                else {
                    alert('Invalid email or password');
                    login.reset();
                }

            }

        } catch (error) {
            alert('Error in registration', error);
            login.reset();

        }
    };
}