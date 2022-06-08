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
  //console.log(values);
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(values),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(JSON.stringify(data));
      formElem.reset();
    });
}
formElem.addEventListener('submit', onCreateUser);
