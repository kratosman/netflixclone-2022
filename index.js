const accordionBtn = document.getElementsByClassName('accordion__button')
const panel = document.querySelectorAll('.accordion__contents')
const accorArray = Array.from(accordionBtn);

accorArray.forEach((item, index) => {
    item.addEventListener('click', function() {
            panel[index].classList.toggle("accordion__active");
            accorArray[index].classList.toggle("accordion__isOpen"); 
    })
})

const email = document.getElementById('input__email');
const btn = document.getElementById('handlerSubmit')
const error = document.querySelector('.error');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    if(email.value == "") {
        error.innerHTML += "Email is required!"
    }
})
