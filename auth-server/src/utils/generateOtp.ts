export function generateOTP(){
  return Math.floor(10000000 + Math.random() * 90000000)
}