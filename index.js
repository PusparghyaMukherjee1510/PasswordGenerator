
let showpassword=document.querySelector('.showpassword');
let password=document.getElementById('password');
let clear=document.getElementById('clear');

const uprset='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lwrset='abcdefghijklmnopqrstuvwxyz'
const symset='~@#$%&()/_'
const numset='1234567890'

const getPassword=(dataset)=>{
      return dataset[Math.floor(Math.random() * dataset.length)]
}

password.addEventListener('click',(e)=>{
    e.preventDefault();
    showpassword.innerHTML=`<h3>Your Password is:-\u00A0\u00A0 ${getPassword(uprset)}${getPassword(lwrset)}
    ${getPassword(symset)}${getPassword(numset)}${getPassword(uprset)}${getPassword(lwrset)}
    ${getPassword(symset)}${getPassword(numset)}</h3>`;
});
clear.addEventListener('click',(e)=>{
    e.preventDefault();
    showpassword.innerHTML="";
})