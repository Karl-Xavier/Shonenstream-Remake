const FetchHTML = require('../config/Cheerio')
import getNextSeason from "../utils/getSeason"

const url = 'https://www.anime-planet.com/anime/seasons/upcoming'

interface UpcomingItem {
  imgURL: string;
  title: string;
}

async function getUpComing(){

  try {

    const { next } = getNextSeason()

    const upcomingData: UpcomingItem[] = []

    const $ = FetchHTML(url)

    $('h3').each((_: any, el: any) => {

      const heading = $(el).text().trim()

      if(heading.toLoweCase().includes(next.toLowerCase())){

        const firstUl = $(el).nextAll('ul').first()

        firstUl.find('li').each((index: any, element: any) => {

          const imgURL = $(element).find('a .crop img').attr('src')
          const title = $(element).find('a .crop img').attr('alt')

          upcomingData.push({ imgURL, title })

        })

      }

    })

    return upcomingData

  } catch(err: any) {
    throw new Error(err)
  }

}

module.exports = getUpComing