// Single element selector
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

// Multiple element selector

// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// const items=document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));
//  const ul = document.querySelector('.items');
// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent='hello';
// ul.children[1].innerText ='hii';
// ul.lastElementChild.innerHTML ='<h1>bye</h1>';

// // Change color of button
// const btn = document.querySelector('.btn');
// // btn.style.background = 'green';

//     // change input  name
//     const name = document.querySelector('#name');
//     name.style.background = 'orange';
//     name.style.color = 'white';

//     const email = document.querySelector('#email');
//     email.style.background = '#6354';
//    email.style.color = 'white';


// btn.addEventListener('mouseover',(e)=>{
//     e.preventDefault();
// document.querySelector('#my-form').style.background = '#cccc';
// document.querySelector('body').classList.add('bg-dark');
// document.querySelector('.items').lastElementChild.innerHTML='<h1>hey buddy</h1>';
// });



const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'please fill the forms';

        // set timer
        setTimeout(() => msg.remove(), 3000);

    } else {
        // Create new list item with user
        const li = document.createElement('li');


        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

        li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;


        userList.appendChild(li);
        // clear values of user
        nameInput.value = '';
        emailInput.value = '';
    }
}
