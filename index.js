const baseUrl = 'https://629649eb810c00c1cb72fc33.mockapi.io/api/v1/users';
const buttonSubmit = document.querySelector('.submit-button');
const formElem = document.querySelector('.login-form');

formElem.addEventListener('input', function () {
  if (formElem.reportValidity()) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
});

function onCreateUser(event) {
  const data = Object.fromEntries(new FormData(event.target.formElem));
  const userData = JSON.stringify(data);
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
buttonSubmit.addEventListener('submit', onCreateUser);
document.querySelectorAll('input').value = '';
