// var throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const formEmail = document.querySelector('input');
const formMessage = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';
const objDataForm = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 1000));

savedInputData();

function onFormInput(e) {
  objDataForm[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(objDataForm));
}

function savedInputData() {
  const inputDataStorage = localStorage.getItem(STORAGE_KEY);
  const savedInputData = JSON.parse(inputDataStorage);
  if (savedInputData.email || savedInputData.message) {
    formEmail.value = savedInputData.email;
    formMessage.textContent = savedInputData.message;
  }
}

function onFormSubmit(ev) {
  ev.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  ev.target.reset();
  //   ev.target['1'].textContent.reset();
  //   console.dir(ev);
  // console.log(ev.target['1'].textContent);
  //   console.log(ev.target);

  //   ev.currentTarget.textarea.textContent.reset();
}