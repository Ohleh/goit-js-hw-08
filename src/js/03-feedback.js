import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};

const emailInput = refs.form.elements.email;
const messageInput = refs.form.elements.message;
const STORAGE_KEY = 'feedback-form-state';

checkInputs();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onFormInput);

function onFormSubmit(et) {
  et.preventDefault();
  if (emailInput.value === '' || messageInput.value === '') {
    return alert('Pls inpul all data');
  }
  console.log({ email: emailInput.value, message: messageInput.value });
  et.target.reset();
  const STORAGE_KEY = 'feedback-form-state';
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(el) {
  const objStorage = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  const { name, value } = el.target;
  objStorage[name] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(objStorage));
}

function checkInputs() {
  const objStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (objStorage) {
    Object.keys(objStorage).forEach(key => {
      const input = refs.form.elements[key];
      if (input) {
        input.value = objStorage[key];
      }
    });
  }
}

//
//
//
//
// const STORAGE_KEY = 'feedback-form-state';
// const objDataForm = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

// checkInputs();

// refs.form.addEventListener('input', throttle(onFormInput, 100));
// refs.form.addEventListener('submit', onFormSubmit);

// function onFormInput(e) {
//   objDataForm[e.target.name] = e.target.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(objDataForm));
// }

// function onFormSubmit(ev) {
//   ev.preventDefault();
//   console.log({ Email: ev.target['0'].value, Message: ev.target['1'].value });
//   ev.target.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// function checkInputs() {
//   const savedInputData = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   if (savedInputData) {
//     if (savedInputData.email) {
//       refs.form.email.value = savedInputData.email;
//     }
//     if (savedInputData.message) {
//       refs.form.message.value = savedInputData.message;
//     }
//   }
// }
