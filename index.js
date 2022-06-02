const baseUrl = 'https://629649eb810c00c1cb72fc33.mockapi.io/api/v1/users';
const buttonSubmit = document.querySelector('.submit-button');
const formElem = document.querySelector('.login-form');

const validate = (e) => {
  if (e.target.reportValidity()) {
    buttonSubmit.disabled = false;
  }
};

formElem.addEventListener('change', validate);
const formData = Object.fromEntries(new FormData(formElem));
const userData = JSON.stringify(formData);

function createUser(userData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.body)
    .then((result) => alert(result));
}
buttonSubmit.addEventListener('click', createUser);

formElem.value = '';
