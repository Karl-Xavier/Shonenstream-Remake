'use client'

import React from 'react'
import './css/footer.css'
import { FacebookLogo, GithubLogo, LinkedinLogo, WhatsappLogo } from 'phosphor-react'
import Link from 'next/link'

export default function Footer() {

  const date = new Date()
  const currentYear = date.getFullYear()

  return (
    <footer className='footer p-3 bg-[#201f1fe3]'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-0">
        <section className='info-web'>
          <h2 className='text-[20px] font-bold text-[#ee49fd]'>Shonenstream</h2>
          <p className="description text-[14px]">Your One stop hub for all your anime series</p>
          <div className="socials mt-[5px]">
            <a href='' target='_blank' className='whatsapp flex flex-row justify-start gap-2 items-center'><WhatsappLogo size={22} color='green' weight='fill'/> <span>Whatsapp Channel</span></a>
            <a href='https://github.com/Karl-Xavier/Shonenstream-Remake.git' className='github flex flex-row justify-start gap-2 items-center'><GithubLogo size={22} color='#eee' weight='fill'/> <span className="socials-description">Github Repository</span></a>
          </div>
        </section>
        <section className="quick-links">
          <h2 className='text-[20px] font-bold'>Quick Link</h2>
          <div className="links flex flex-col justify-start gap-2 text-[14px]">
            <Link href='/movies'>Movies</Link>
            <Link href='/feed'>News</Link>
            <Link href='/search'>Search</Link>
          </div>
        </section>
        <section className="customer-service">
          <h2 className='text-[20px] font-bold'>Customer Service</h2>
          <p className='text-[14px]'>Contact Us on <a href="mailto:contactshonenstream@gmail.com">contactshonenstream@gmail.com</a></p>
        </section>
      </div>
      <div className='credits text-center my-3 text-[14px]'>
        <p>No file is being stored on the server, content is gotten from third party providers</p>
        <span>&copy; Shonenstream {currentYear}</span>
      </div>
    </footer>
  )
}
