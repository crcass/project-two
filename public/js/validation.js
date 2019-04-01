const empFormOne = document.getElementById('empFormOne');
const empFormTwo = document.getElementById('empFormTwo');
const devFormOne = document.getElementById('devFormOne');
const devFormTwo = document.getElementById('devFormTwo');

const empOneInputs = [
  empFormOne.children[0].children[1],
  empFormOne.children[0].children[3],
  empFormOne.children[0].children[5],
];

const empTwoInputs = [
  empFormTwo.children[0].children[1],
  empFormTwo.children[0].children[3],
];

const devOneInputs = [
  devFormOne.children[0].children[1],
  devFormOne.children[0].children[3],
  devFormOne.children[0].children[5],
  devFormOne.children[0].children[7],
];

const devTwoInputs = [
  devFormTwo.children[0].children[1],
  devFormTwo.children[0].children[3],
];

const hasError = field => {
  if (field.type === 'button') return;

  const validity = field.validity;

  if (validity.valid) return;

  if (validity.valueMissing) return 'Please fill out this field';

  if (validity.typeMismatch) {
    if (field.type === 'url') return 'Please enter a URL.';
  }
};

const showError = (field, error) => {
  field.classList.add('border-danger');
  field.placeholder = error;
};

const removeError = field => {
  field.classList.remove('border-danger');
};

// form validation
const forms = document.querySelectorAll('.validate');
for (let i = 0; i < forms.length; i++) {
  forms[i].setAttribute('novalidate', true);
}

document.addEventListener(
  'blur',
  e => {
    if (!e.target.form.classList.contains('validate')) return;

    const error = hasError(e.target);
    if (error) {
      showError(e.target, error);
      return;
    }
    removeError(e.target);
  },
  true
);

$('#empNextOne').on('click', e => {
  e.preventDefault();
  for (let i = 0; i < empOneInputs.length; i++) {
    let error = hasError(empOneInputs[i]);
    if (error) {
      showError(empOneInputs[i], error);
      return false;
    }
    removeError(e.target);
  }
});

$('#empNextTwo').on('click', e => {
  e.preventDefault();
  for (let i = 0; i < empTwoInputs.length; i++) {
    let error = hasError(empTwoInputs[i]);
    if (error) {
      showError(empTwoInputs[i], error);
      return false;
    }
    removeError(e.target);
  }
});

$('#devNextOne').on('click', e => {
  e.preventDefault();
  for (let i = 0; i < devOneInputs.length; i++) {
    let error = hasError(devOneInputs[i]);
    if (error) {
      showError(devOneInputs[i], error);
      return false;
    }
    removeError(e.target);
  }
});

$('#devNextTwo').on('click', e => {
  e.preventDefault();
  for (let i = 0; i < devTwoInputs.length; i++) {
    let error = hasError(devTwoInputs[i]);
    if (error) {
      showError(devTwoInputs[i], error);
      return false;
    }
    removeError(e.target);
  }
});
