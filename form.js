const user = document.getElementById('username');
const mask = /[0-9]/;
let alert = document.createElement('span');
const value = user.value;
if(value.search(mask) == 0){
    alert.innerText = "your username can not be begin by a number!";
    alert.style.color = 'red';
    user.append(alert);
}