let email = prompt('Provide your email');
let minLength = 5;
let minPassLength = 6;

if ( email === null || email.length === 0 ) {
  alert('Canceled')
} else if ( email.length < minLength ) {
  alert('I don`t know any emails having name length less than 5 symbols')
} else if ( email === 'user@gmail.com' || email === 'admin@gmail.com' ) {
   let pass = prompt('Enter your password')

   if ( pass === null || pass.length === 0 ) {
     alert('Canceled')
   } else if ( email === 'user@gmail.com' && pass === 'UserPass' ||
              email === 'admin@gmail.com' && pass === 'AdminPass' ) {
      let changePass = confirm('Do you want to change your password?')

      if (changePass) {
        let oldPass = prompt('Enter old password')

        if ( email === 'user@gmail.com' && oldPass === 'UserPass' ||
            email === 'admin@gmail.com' && oldPass === 'AdminPass' ) {
          let newPass = prompt('Enter new password!');

          if (newPass.length >= minPassLength) {
            let confirmPass = prompt('Confrim password')

            if (confirmPass === newPass) {
              alert('You have successfully changed your password.')
            } else {
              alert('You wrote the wrong password.')
            }
          } else {
            alert('It’s too short password. Sorry.')
          }
        } else {
          alert('Old password is wrong')
        }
      } else {
        alert('You have failed the change.')
      }
   } else {
      alert('Wrong password')
   }
} else {
  alert('I don`t know you')
}
