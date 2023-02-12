document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField =document.getElementById('email-input');
    const passwordField =document.getElementById('password-input');
    const email = emailField.value;
    const password = passwordField.value;
    // console.log(email,password);
    if(email === 'baaperBank@gmail.com' && password === 'secret' ){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid user');
    }
})