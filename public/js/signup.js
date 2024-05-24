const signupFormHandler = async (event) => {
    event.preventDefault();
  
    //Get user input values
    const name = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (name && password) {
      // Call the signup route with the user input provided
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response.ok)
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
const loginInstead = (event) => {
    document.location.replace('/login')
}
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);

    document
    .querySelector('#login-instead')
    .addEventListener('click',  loginInstead);