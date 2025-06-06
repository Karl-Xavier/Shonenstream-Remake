export function validateInput(email, password){
  const errors = {}

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if(!email || !emailRegex.test(email)){
    errors.email = 'Invalid email address'
  }

  if(!password || password.length < 8){
    errors.password = 'Password must be at least 8 characters long'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}