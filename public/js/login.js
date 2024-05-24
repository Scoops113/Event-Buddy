const loginFormHandler = async (event) => {
    // TODO: Add a comment describing the functionality of this statement
    event.preventDefault();
  
    // TODO: Add a comment describing the functionality of these expressions
    const name = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (name && password) {
      // TODO: Add a comment describing the functionality of this expression
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
const signupInstead = (event) => {
    document.location.replace('/signup')
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('#signup-instead').addEventListener('click',  signupInstead);