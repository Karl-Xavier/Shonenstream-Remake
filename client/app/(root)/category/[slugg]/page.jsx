import CategoryComponent from '@/app/component/Category/CategoryComponent'
import getCategoryInfo from '@/app/services/category/getCategoryInfo'
import getEpisodeList from '@/app/services/getEpisodes'
import React from 'react'

export async function generateMetadata({ searchParams }){

  const og = await searchParams

  const ogURL = og.og || null

  const url = decodeURIComponent(ogURL || '')

  const linkParams = url.replace('/watch/', '')


  const res = await getCategoryInfo(linkParams)

  const data = res.data ? res.data.categoryItem : res.categoryItem

  return {
    title: `Watch ${data.title} Online | Shonenstream`,
    description: `${data.description}`,
    openGraph: {
      title: `Watch ${data.title} Online | Shonenstream`,
      description: `${data.description}`,
      images: [
        {
          url: data.imgURL,
          alt: `${data.title}`
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Watch ${data.title} Online | Shonenstream`,
      description: `${data.description}`,
      images: [data.imgURL]
    }
  }

}

export default async function page({ params, searchParams }) {

  const og = await searchParams

  const { slugg } = await params 

  const ogURL = og.og || null

  const url = decodeURIComponent(ogURL || '')

  const ogName = slugg.split('-').map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(' ')

  const linkParams = url.replace('/watch/', '')

  try {
    
    const dataItem = await getCategoryInfo(linkParams)

    const episodeData = await getEpisodeList(ogName)
  
    const categoryData = dataItem.data ? dataItem.data.categoryItem : dataItem.categoryItem

    const relatedSeason = dataItem.data ? dataItem.data.relatedSeasons : dataItem.relatedSeasons

   console.log(dataItem)

    const episodes = episodeData
  
    return (
      <div><CategoryComponent categoryData={categoryData} episodeList={episodes}/></div>
    )

  } catch (err) {

    console.log(err)
    
    const errType = ['ReferenceError', 'TypeError', 'Error', 'AggregatorError']

    if(err.message === 'Network Error' || err.message === 'Request failed with status code 500'){
      throw new Error('Network Error')
    }else if(errType.includes(err.name)){
      throw new Error('Something Went Wrong with the Application')
    }else{
      throw new Error(err.data.error)
    }

  }

}