document.querySelector('.login-form form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Here you can add your logic to handle the login
    console.log('Username:', document.getElementById('username').value);
    console.log('Password:', document.getElementById('password').value);
    // You can also add an AJAX request to send the data to the server
  });

  