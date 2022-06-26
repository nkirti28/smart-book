async function signupFormHandler(event) {
  console.log('signup2')
  event.preventDefault();
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  
  if (username && email && password) {
    const response=await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password
      }),
        headers: { 'Content-Type': 'application/json' }
    })
    const result=await response.json()
    console.log(result)
    if(response.ok){
      location.href="/profile"
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
console.log('signup')