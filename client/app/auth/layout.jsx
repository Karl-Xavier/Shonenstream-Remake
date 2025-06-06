import '../globals.css'

import React from 'react'
import { AuthProvider } from '../utils/context/authContext'

export default function layout({ children }) {
  return (
    <html>
      <body>
        <AuthProvider>
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  )
}