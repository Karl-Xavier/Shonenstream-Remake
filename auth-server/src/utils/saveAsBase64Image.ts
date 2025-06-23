import * as fs from 'fs'
import path from 'path'
import { authorize, uploadToDrive } from '../service/uploadToDrive'
const mime = require('mime-types')

export async function saveAsBase64(profileImage: string){

  const matches = profileImage.match(/^data:(.+);base64,(.+)$/) || ''

  const ext = mime.extension(matches[1])

  const buffer = Buffer.from(matches[2], 'base64')

  const fileName = `profile_${Date.now()}.${ext}`

  const filePath = path.join(__dirname, 'temp', fileName)

  fs.writeFileSync(filePath, buffer)

  const authClient = await authorize()

  const imageURL = await uploadToDrive(authClient, filePath, fileName)

  fs.unlinkSync(filePath)

  return imageURL

}