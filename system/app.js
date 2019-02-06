(function(){
  'use strict';

  const clientId = "";
  const clientSecret = "";
  const grantType = "";
  let login = document.getElementById('login');

  login.addEventListener('click', e => {
    e.preventDefault();

    fetch('http://127.0.0.1:8000/oauth/token', {
      method: 'POST',
      body: JSON.stringify({
        clientId: clientId,
        clientSecret: clientSecret,
        grantType: grantType,
        username: document.getElementById('user').value,
        password: document.getElementById('password').value
      }),
      headers: {'Content-Type': 'application/json'},
    })
    .then(response => {
      return response.json()
    })
    .then(data => console.log(data))
  });
})();
