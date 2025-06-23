# Shonenstream - Auth Server

This is the backend that manages authentication and users data for Shonenstream. It handles user Signup, Login, Email Verification, Password Reset, Comments and Bookmark.

## FEATURES

- Authentication using JWT(JSON WEB TOKEN) and Protected Route
- MongoDB User Database
- Email Verification using Nodemailer
- Password reset functionality
- CORS Protection for Frontend

## TECH STACK

- Node.js
- Express.js
- Typescript
- JWT (Json Web Token)
- MongoDB
- UUID
- Nodemailer
- dotenv

## INSTALLATION 

```bash
  git clone https://github.com/Karl-Xavier/Shonenstream-Remake.git

  cd auth-server

  npm install

  npm run dev
```
## ENVIRONMENT VARIABLES

- MONGO_URI = 'You can just leave it blank'
- REDIS_URL = 'Also leave blank'
- ACCESS_TOKEN_SECRET = 'Generate using JWT'
- REFRESH_TOKEN_SECRET = 'Generate using JWT'
- SMTP_EMAIL = 'Google Account Email'
- SMTP_PASS = 'Google Account Password'
- FOLDER_ID = 'Google Drive Folder ID'


# EXTRA NOTE

When you work on the project please right what you worked and the file name in the addedOrRemoved.txt