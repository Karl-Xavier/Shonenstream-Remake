const FetchHTML = require('../config/Cheerio')
import { v4 } from "uuid"

async function scrapeNewsPage(url: string): Promise<any>{

    try {
        
        const $ = await FetchHTML(url)

        const time = $('.news-info-block .information').text().trim()

        function extractTime(text: string) {
            const timeMatch = text.match(/(\d{1,2}:\d{2} [AP]M)/);
            if (timeMatch) return timeMatch[0];
          
            const relativeTimeMatch = text.match(/(Yesterday), (\d{1,2}:\d{2} [AP]M)/);
            if (relativeTimeMatch) return relativeTimeMatch[1];
          
            const dateMatch = text.match(/(Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|Jan|Feb|Mar) \d{1,2}/);
            if (dateMatch) return dateMatch[0];
          
            const hoursAgoMatch = text.match(/(\d+) hours? ago/);
            if (hoursAgoMatch) return `${hoursAgoMatch[1]} hours ago`;
          
            return null;
          }

        const pageContent = {

            id: v4(),
            title: $('h1.title a').text().trim(),
            description: $('.content').text().trim(),
            image: $('.content .userimg').attr('src'),
            date: extractTime(time)

        }

        return pageContent

    } catch(err: any) {
        
        console.log(err)
        return null

    }

}

module.exports = scrapeNewsPage