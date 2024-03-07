let passwordField = document.querySelector('#my-password');
let copy = document.querySelector('.fa-copy');
let createPssword = document.querySelector('.create');
let showPassword = document.querySelector('.show');
let removePassword = document.querySelector('.remove');
let myPassword='';
let copyPass = '';
let data = `ABCDEFGHIJKLMNOPKRSTUVWXYZ1234567890!@#$%^&*()_+/*-|\\abcdefghijklmnopqrstuvwxyz`
let length= 8//prompt('Please Enter password length!')
empty = _=> passwordField.value=''

generatePass()
showPass()
removePass()



function generatePass(){
    
    createPssword.addEventListener('click',function(){
        myPassword=''
        for(i=0;i<length;i++){
            myPassword+= data.charAt(Math.floor(Math.random()*data.length))
        }
        console.log(myPassword)
        passwordField.value=myPassword
        setTimeout(empty,3000)
    })
    copyPassword()
    
}

function copyPassword(){
    copy.addEventListener('click',function(){
        copyPass = myPassword
        alert(`your password was copied successfully`)
    })
    passwordField.addEventListener('copy',function(){
        copyPass = myPassword
        alert(`your password was copied successfully`)
    })
}

function showPass(){
    showPassword.addEventListener('click',function(){
        myPassword!=''?alert(`your password is ${myPassword}`):alert(`Please! click on generate password`)
    })
}

function removePass(){
    removePassword.addEventListener('click',function(){
        if(myPassword){
            passwordField.value='';
            myPassword='';
            copyPass='';
            alert('your password has been cleared successfully')
        }
        else{
            alert('There is no password! please click on Genertate password')
        }

    })
}


