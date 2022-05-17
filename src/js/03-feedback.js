var throttle = require('lodash.throttle');

const form = document.querySelector('form');
const formEmail = document.querySelector('input');
const formMessage = document.querySelector('textarea');
const objDataForm = {};
// objDataForm.submitt = 'yes';

form.addEventListener('submit', onFormSubmit);
formEmail.addEventListener('input', onFormEmail);
formMessage.addEventListener('input', onFormMessage);

function onFormSubmit(ev) {
  ev.preventDefault();
  console.log(ev.timeStamp);
  objDataForm.submitt = ev.timeStamp;
  //   ev.currentTarget.reset();
}

function onFormEmail(ev) {
  objDataForm.email = ev.currentTarget.value;
  //   localStorage.setItem('emailData', ev.currentTarget.value);
}

function onFormMessage(ev) {
  objDataForm.message = ev.currentTarget.value;
  //   localStorage.setItem('messageData', ev.currentTarget.value);
}

console.log(objDataForm.submitt);
// console.log(objDataForm.submitt);
// localStorage.setItem('emailData', objDataForm.message);

//
//
//
//
//

// const formMessage = document.querySelector('textarea');
// const formButton = document.querySelector('button');

// const objectDataSave = {};

// //
// const LOCALSTORAGE_KEY = 'feedback-form-state';

// const onFormEmail = function (event) {
//   //   event.preventDefault();
//   objectDataSave[event.target.name] = event.target.value;

//   //   console.log(event.target.name);
//   localStorage.setItem(LOCALSTORAGE_KEY, event.currentTarget.value);
//   //   objectDataSave = event.currentTarget.value;
// };

// console.log(objectDataSave);
// //
// //
// const onFormMessage = function (event) {
//   event.preventDefault();
//   console.log(event.currentTarget.value);
// };

// formMessage.addEventListener('input', onFormMessage);
// //
// //
// // let email = [];
// // const message = [];
// //
// // const objectDataSave = {
// //   email,
// //   message,
// // };

// // localStorage.setItem('feedback-form-state', JSON.stringify(objectDataSave));
