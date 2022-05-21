import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  formEmail: document.querySelector('input'),
  formMessage: document.querySelector('textarea'),
};

const STORAGE_KEY = 'feedback-form-state';
const objDataForm = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 100));

checkInputs();

function onFormSubmit(ev) {
  ev.preventDefault();
  //   console.log({ Email: ev.target['0'].value, Message: ev.target['1'].value });
  ev.currentTarget.reset();
  ev.target.value;
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(e) {
  objDataForm[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(objDataForm));
  //   console.dir(refs.form.email.value);
}

function checkInputs() {
  const savedInputData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedInputData) {
    if (savedInputData.email) {
      refs.form.email.value = savedInputData.email;
    }
    if (savedInputData.message) {
      refs.formMessage.textContent = savedInputData.message;
    }
  }
  onFormInput();
}

// function savedInputData() {
//   const inputDataStorage = localStorage.getItem(STORAGE_KEY);
//   const savedInputData = JSON.parse(inputDataStorage);
//   if (inputDataStorage) {
//     refs.formEmail.value = savedInputData.email;
//     refs.formMessage.textContent = savedInputData.message;
//   }
// }

// function onFormSubmit(ev) {
//   ev.preventDefault();
//   console.log({ Email: ev.target['0'].value, Message: ev.target['1'].value });
//   localStorage.removeItem(STORAGE_KEY);
//   ev.target.reset();
// }

//
//
//
//settimeout( time() => {console.log('da')}, 200)
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
