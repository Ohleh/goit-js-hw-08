// var throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const formEmail = document.querySelector('input');
const formMessage = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';
const objDataForm = {};

savedInputData();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {
  objDataForm[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(objDataForm));
}

function savedInputData() {
  const inputDataStorage = localStorage.getItem(STORAGE_KEY);
  const savedInputData = JSON.parse(inputDataStorage);
  if (inputDataStorage) {
    formEmail.value = savedInputData.email;
    formMessage.textContent = savedInputData.message;
  }
}

function onFormSubmit(ev) {
  ev.preventDefault();
  //   console.log(ev.target);
  console.log('Email', ev.target['0'].value);
  console.log('Message', ev.target['1'].value);
  localStorage.removeItem(STORAGE_KEY);
  // ev.target.reset();
  //   ev.target.textarea.textContent = '';
  // ev.target['1'].textContent.reset();
  //   console.dir(ev);
  //   console.log(ev.target['1'].textContent);
  //   console.log(ev.target);

  //   ev.currentTarget.textarea.textContent.reset();
}

//
//
//
//
//
//
//
//
//// var throttle = require('lodash.throttle');
// import throttle from 'lodash.throttle';

// const form = document.querySelector('form');
// const formEmail = document.querySelector('input');
// const formMessage = document.querySelector('textarea');
// const STORAGE_KEY = 'feedback-form-state';
// const objDataForm = {};

// form.addEventListener('submit', onFormSubmit);
// form.addEventListener('input', throttle(onFormInput, 500));

// savedInputData();

// function onFormInput(e) {
//   objDataForm[e.target.name] = e.target.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(objDataForm));
// }

// function savedInputData() {
//   const inputDataStorage = localStorage.getItem(STORAGE_KEY);
//   const savedInputData = JSON.parse(inputDataStorage);
//   if (savedInputData.email || savedInputData.message) {
//     formEmail.value = savedInputData.email;
//     formMessage.textContent = savedInputData.message;
//   }
// }

// function onFormSubmit(ev) {
//   ev.preventDefault();
//   localStorage.removeItem(STORAGE_KEY);
//   ev.target.reset();
// //     ev.target['1'].textContent.reset();
// //     console.dir(ev);
// //   console.log(ev.target['1'].textContent);
// //     console.log(ev.target);

// //     ev.currentTarget.textarea.textContent.reset();
// }
