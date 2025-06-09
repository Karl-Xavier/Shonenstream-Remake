import React from 'react'
import './css/genrecomponent.css'
import GenreCard from './GenreCard'
import PaginationWrapper from '../Pagination/PaginationWrapper'
import getGenre from '@/app/services/movieAndgenre/getGenre'

export default async function GenreComponent({ page, genre }) {

  try{

    const data = await getGenre(genre, page)

    let genreData = []

    genreData = data.data ? data.data.scrapedList : data.scrapedList

    const totalPage = data.data ? data.data.totalPages : data.totalPages

    const formattedText = genre.split('-').map(word => word.charAt(0)+word.slice(1)).join(' ').toUpperCase()

    return (
      <div className='w-full h-auto container mt-4 p-2 genre-container'>
        <h2 className='ml-4 text-[18px] font-bold'>{formattedText} ANIME</h2>
        <ul className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-[20px] p-[20px]'>
          {genreData.map((genres, index) => (
            <GenreCard card={genres} key={index}/>
          ))}
        </ul>
        <PaginationWrapper totalPages={totalPage}/>
      </div>
    )

  }catch(err){

    const errType = ['ReferenceError', 'TypeError', 'Error', 'AggregatorError']

    if(err.message === 'Network Error' || err.message === 'Request failed with status code 500'){
      throw new Error('Network Error')
    }else if(errType.includes(err.name)){
      throw new Error('Something Went Wrong with the Application')
    }
    return
  }

}