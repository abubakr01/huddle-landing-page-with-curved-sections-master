var SubscribeBtn = document.querySelector('form button');
var Email = document.querySelector('input');
var EmailError = document.querySelector('.error');

SubscribeBtn.addEventListener('click', function(e){
    e.preventDefault()
    emailTest(Email)
    onError('Check your email please')
})



function emailTest(e_mail){
    return  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e_mail)

}
function onError(errorMsg){
if(!emailTest(Email.value.trim())){
EmailError.innerHTML = errorMsg;


} 
else if(Email.value.trim() == "")
{EmailError.innerHTML = errorMsg
}
else{
    EmailError.innerHTML =''
}
}