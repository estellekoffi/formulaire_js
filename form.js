const user = document.getElementById('username');
const submit = document.getElementById('sub');
const mail = document.getElementById('mail');
const pass = document.getElementById('pass');
const confirm = document.getElementById('confirm');
const mask1 = /[0-9]/;
const mask2 = /[a-z][0-9a-z]@[a-z].[a-z]/g;
let alert = document.createElement('span');
const value1 = user.value;
const value2 = mail.value;
const value3 = pass.value;
const value4 = confirm.value;
if(value1.search(mask1) == 0 ||  value2.test(mask2) == false || value3 != value4){
    /*
    alert.innerText = "your username can not be begin by a number!";
    alert.style.color = 'red';
    user.append(alert); 
    */
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
    })
}else{
    submit.addEventListener('click', (e)=>{
        alert("cool");
    })
}