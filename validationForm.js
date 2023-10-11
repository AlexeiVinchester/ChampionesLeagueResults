"use strict"

function addCheckIcon(tagname){
    tagname.innerHTML = '<i class="fas fa-check-circle"></i>';
}

function validateUserName(tagId, errorId){
    let tagForError = document.getElementById(errorId);
    let name = document.getElementById(tagId).value;

    if(name.length == 0){
        tagForError.innerHTML = 'Name is required!';
        return false;
    }
    if(!name.match(/^[A-Za-z]*$/)){
        tagForError.innerHTML = 'Write full Name';
        return false;
    }

    addCheckIcon(tagForError);
    return true;
}

function validatePhone(){
    const regPhoneError = document.getElementById('reg-phone-error');
    let telNumber = document.getElementById('reg-phone').value;

    if(telNumber.length == 0){
        regPhoneError.innerHTML = 'Phone number is required!';
        return false;
    }
    if(telNumber.length < 12){
        regPhoneError.innerHTML = 'Number should be longer!';
        return false;
    }
    if(telNumber.length > 12){
        regPhoneError.innerHTML = 'Number should be shorter!';
        return false;
    }
    if(!telNumber.match(/^[\d]{1,12}$/)){
        regPhoneError.innerHTML = 'Only digits, please!';
        return false;
    }

    addCheckIcon(regPhoneError);
    return true;
}

function validatePassword(tagId, errorId){
    let password = document.getElementById(tagId).value;
    let tagForError = document.getElementById(errorId);

    if(password.length == 0){
        tagForError.innerHTML = 'Password is required!';
        return false;
    }
    if(!password.match(/^[A-Za-z\d]{8,}$/)){
        tagForError.innerHTML = 'Incorrect password';
        return false;
    }

    addCheckIcon(tagForError);
    return true;

}

function validateLoginForm(){
    if(!validateUserName('login-username', 'log-username-error') ||
        !validatePassword('login-password', 'log-password-error')){
            return false;
        }
}

function validateRegisterForm(){
    if(!validateUserName('reg-username', 'reg-username-error') ||
        !validatePassword('reg-password', 'reg-password-error')||
        !validatePhone()){
            return false;
        }
}