const profilePictures = [
  'static/shonen-1.jpg',
  'static/shonen-2.jpg',
  'static/shonen-3.jpg',
  'static/shonen-4.jpg',
  'static/shonen-5.jpg',
  'static/shonen-6.jpg',
]

export default function getRandomImg(){
  const randomIndex = Math.floor(Math.random() * profilePictures.length)

  return profilePictures[randomIndex]
}