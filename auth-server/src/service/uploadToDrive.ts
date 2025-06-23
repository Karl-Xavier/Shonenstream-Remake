import * as fs from 'fs'
import path from 'path'
import { google, drive_v3 } from 'googleapis'
const mime = require('mime-types')
const keyFilePath = require('../config/profileuploads.json')

const FOLDER_ID: string = process.env.FOLDER_ID as string

console.log(keyFilePath.privateKey, keyFilePath.client_email)


export async function authorize(){
  const jwtClient = new google.auth.JWT({
    email: keyFilePath.client_email,
    key: keyFilePath.private_key,
    scopes: ['https://www.googleapis.com/auth/drive']
  })

  await jwtClient.authorize()

  return jwtClient
}

export async function uploadToDrive(authClient: any, filePath: string, fileName: string){
  return new Promise((resolve, rejected) => {

    const drive = google.drive({ version: 'v3', auth: authClient })

    const fileMetadata = {
      name: fileName,
      parents: [FOLDER_ID]
    }

    drive.files.create({
      requestBody: fileMetadata,
      media: {
        body: fs.createReadStream(filePath),
        mimeType: mime.lookup(filePath)
      },
      fields: 'id'
    }, function(err: any, file: any){
      if(err){
        console.log(err)

        return rejected(err)
      }

      resolve(file)

      console.log(file)
    })

  })
}

/* const auth = new google.auth.GoogleAuth({
  keyFile: keyFilePath,
  scopes: ['https://www.googleapis.com/auth/drive']
}) */

/* export async function uploadToDrive(filePath: string, filename: string): Promise<string>{

  const drive = google.drive({ version: 'v3', auth }) as drive_v3.Drive

  const fileMetadata: drive_v3.Schema$File = {
    name: filename,
    parents: [FOLDER_ID]
  }

  const media = {
    mimeType: mime.lookup(filePath),
    body: fs.createReadStream(filePath)
  }

  const file = await drive.files.create({
    requestBody: fileMetadata,
    media,
    fields: 'id',
  })

  const fileId: string | undefined = file.data.id as string | undefined

  await drive.permissions.create({
    fileId,
    requestBody: {
      role: 'reader',
      type: 'anyone'
    }
  })

  const result = await drive.files.get({
    fileId,
    fields: 'webViewLink, webContentLink'
  })

  console.log(result.data.webContentLink, result.data.webViewLink)

  return result.data.webContentLink || result.data.webViewLink || ''

} */