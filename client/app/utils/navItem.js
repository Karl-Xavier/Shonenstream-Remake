'use client'

import { House, FilmSlate, Newspaper } from 'phosphor-react'

export const navItem = [
  { name: 'Home', link: '/', icon: <House weight='fill' size={22}/> },
  { name: 'Genre', link: null, icon: null },
  { name: 'Movies', link: '/movies', icon: <FilmSlate weight='fill' size={22}/> },
  { name: 'News', link: '/feed', icon: <Newspaper weight='fill' size={22}/> }
]