(function(){
  'use strict';
  if(!localStorage.getItem('imglogo') && !localStorage.getItem('nombretienda')){
    fetch('http://127.0.0.1:8000/api/inicio', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      localStorage.setItem('imglogo', data.logo);
      localStorage.setItem('nombretienda', data.tienda);
    })
    .catch(function(error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    });
  }
  if(localStorage.getItem('imglogo') != null){
    document.getElementsByClassName('imglogo')[0].setAttribute("src", localStorage.getItem('imglogo'));
    document.getElementsByClassName('nombretienda')[0].innerHTML =  localStorage.getItem('nombretienda');
}
  const clientId = "2";
  const clientSecret = "zE0J5bXrmhCYqymM9BPe5p8wtBRluykHHwzZe5cc";
  const grantType = "password";
  let login = document.getElementById('login');

  login.addEventListener('click', e => {
    e.preventDefault();

    fetch('http://127.0.0.1:8000/oauth/token', {
      method: 'POST',
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: grantType,
        username: document.getElementById('user').value,
        password: document.getElementById('password').value
      }),
      headers: {'Content-Type': 'application/json'},
    })
    .then(response => {
      if (response.status == 200) {
        response.json().then(data => {
          console.log("si se autentico");
          console.log(data);
          localStorage.setItem('tocken', data.access_token);
          location.href ="./system/pages/home.html";
        });
      }else{
        console.log("no se autentico");
      }
    }).catch(function(error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    });
  });
})();
