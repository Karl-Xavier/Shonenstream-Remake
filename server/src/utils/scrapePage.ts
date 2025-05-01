const FetchHTML = require('../config/Cheerio')

export async function scrapePage(page = '1' as string, name: string | null, type: string): Promise<any>{

    // check if it is a genre or a movie route

    let url = ''

    if(type === 'genres' && name !== null){

        url = page === '1' ? `https://animekai.to/genres/${name}` : `https://animekai.to/genres/${name}?page=${page}`

    }else {

        url = page === '1' ? 'https://animekai.to/movie' : `https://animekai.to/movie?page=${page}`

    }

   

    const $ = await FetchHTML(url)

    const genreList: any = [] as any

    try {
        
        $('.aitem').each((_index: any, element: any) =>{

            const title = $(element).find('.title').attr('title')
            const imgURL = $(element).find('img').attr('data-src')
            const link = $(element).find('.poster').attr('href')

            genreList.push({
                title,
                link,
                imgURL
            })

        })

        // Extract Total number of available Page

        const totalPages = (() => {
            // Select the last .page-link inside the pagination
            let lastHref = $('.pagination .page-link[rel="last"]').attr('href');
        
            if (!lastHref) return 1;
        
            let match = lastHref.match(/page=(\d+)/);
        
            let totalPage = 1;
        
            if (match) {
                const pageNum = parseInt(match[1]);
                totalPage = pageNum > 10 ? 10 : pageNum;
            }
        
            return totalPage;
        })();
        

        return {
            totalPages,
            genreList
        }

    } catch(err) {
        
        throw new Error(`Error Scraping ${type} Page`)

    }

}