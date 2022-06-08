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
  event.preventDefault();
  const formData = new FormData(formElem);
  const values = Object.fromEntries(formData.entries());
  const userData = JSON.stringify(values);
  //console.log(values);
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
formElem.addEventListener('submit', onCreateUser);
document.querySelectorAll('input').value = '';
