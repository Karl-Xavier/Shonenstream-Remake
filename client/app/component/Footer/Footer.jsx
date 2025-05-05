'use client'

import React from 'react'
import './css/footer.css'
import { FacebookLogo, GithubLogo, Link, LinkedinLogo } from 'phosphor-react'

export default function Footer() {
  return (
    <footer>
      <hr/>
      <div className="icons-to">
        <a href=""><GithubLogo/></a>
        <a href=""><LinkedinLogo/></a>
        <a href=""><FacebookLogo/></a>
        <a href=''><Link/></a>
      </div>
      <p>This Project is Open source any one who is interested can go to the github Repository</p>
    </footer>
  )
}
