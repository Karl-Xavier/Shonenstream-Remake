export function isTokenExpired(createdAt: number){
  const minutes = 15
  const now = Date.now()

  const diffInMs = now - createdAt

  const diffInMinutes = diffInMs / 1000 / 60

  console.log(diffInMinutes > minutes)

  return diffInMinutes > minutes

}