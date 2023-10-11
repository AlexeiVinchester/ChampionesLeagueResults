const loginUsernameError = document.getElementById('log-username-error');
const loginPasswordError = document.getElementById('log-password-error');
const regUsernameError = document.getElementById('reg-username-error');
const regPhoneError = document.getElementById('reg-phone-error');
const regPasswordError = document.getElementById('reg-password-error');



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

    tagForError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePhone(){
    let telNumber = document.getElementById('reg-phone').value;
    if(telNumber.length == 0){
        regPhoneError.innerHTML = 'Phone number is required!';
        return false;
    }
    if(!telNumber.match(/^[\d]{1,12}$/)){
        regPhoneError.innerHTML = 'Only digits, please!';
        return false;
    }
    if(telNumber.length < 12){
        regPhoneError.innerHTML = 'Number should be longer!';
        return false;
    }
    
    regPhoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
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
    tagForError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;

}
