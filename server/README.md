## BACKEND REMAKE FOR SHONENSTREAM

## WHAT I DID DIFFERENT FROM THE PREVIOUS BACKEND ?

First of all This project is open source, so you who is not a potential client or not interested in hiring but you are developer. You can make this project better. Please incase you make ay=ny changes give a good note of what you implemented, changed or added. Also message me. I am writing this thinking that this website becomes the best anime platform 😎😎😎😎😎😎.

Now what i did differently are

IMPLEMENTED, ADDED AND CHANGED

## A: AUTHENTICATION

I changed authentication methods, I was previously using firebase for authentication on the server and it caused so much bugs, well because of my incompetence and little knowledge i had regarding authentication on the server using firebase. So i changed to JWT. What i gained from changing are,

1. Less Code
2. Easy Setup
3. More Secure Authentication method

## B: ADDED CONTROLLERS

You see I prefer having many folders than looking at an auth.js file with 300+ lines of code 🥴, is just stressful. Adding Controllers also help when debugging my code, So if i get an error during login, instead of scrolling through lines of code in my auth.js file looking for the login route, i could just simply go to the Login.ts in auth controller and find the error there.

## C: ADDED REDIS CACHE

                _._
           _.-`` __ ''-._
      _.-``    `.  `_.  ''-._
  .-`` .-```.  ```\/    _.,_ ''-._
 (    '      ,       .-`    `,    )
 |`-._`-...-` __...-.``-._ '` _.-'|
 |    `-._   `._    /     _.-'    |
  `-._    `-._  `-./  _.-'    _.-'              N:B ---->  I COPIED THIS FROM MY TERMINAL JUST TO BEAUTIFY MY README FILE
 |`-._`-._    `-.__.-'    _.-'_.-'|
 |    `-._`-._        _.-'_.-'    |
  `-._    `-._`-.__.-'_.-'    _.-'
 |`-._`-._    `-.__.-'    _.-'_.-'|
 |    `-._`-._        _.-'_.-'    |
  `-._    `-._`-.__.-'_.-'    _.-'
      `-._    `-.__.-'    _.-'
          `-._        _.-'
              `-.__.-'

See i won't lie i am happy i learnt redis