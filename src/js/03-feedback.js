import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};

const STORAGE_KEY = 'feedback-form-state';
const objDataForm = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

checkInputs();

refs.form.addEventListener('input', throttle(onFormInput, 100));
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  objDataForm[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(objDataForm));
}

function onFormSubmit(ev) {
  ev.preventDefault();
  console.log({ Email: ev.target['0'].value, Message: ev.target['1'].value });
  ev.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function checkInputs() {
  const savedInputData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedInputData) {
    if (savedInputData.email) {
      refs.form.email.value = savedInputData.email;
    }
    if (savedInputData.message) {
      refs.form.message.value = savedInputData.message;
    }
  }
}
