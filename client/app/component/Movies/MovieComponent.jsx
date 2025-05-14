import React from 'react'
import MovieCard from './MovieCard'
import './css/moviecomponent.css'
import PaginationWrapper from '../Pagination/PaginationWrapper'
import getMovies from '@/app/services/movieAndgenre/getMovies'

export default async function MovieComponent({ page }) {

    try{

    const data = await getMovies(page)

    console.log(data)

    let movieData = []

    movieData = data.data ? data.data.scrapedList : data.scrapedList

    const totalPage = data.data ? data.data.totalPages : data.totalPages

    return (
      <div className='container p-2 mt-4 movies-container w-full h-auto'>
        <ul className='grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-[20px] p-[20px]'>
          {movieData.map((movie, index) => (
            <MovieCard movie={movie} key={index}/>
          ))}
        </ul>
        <PaginationWrapper totalPages={totalPage}/>
      </div>
    )

  }catch (err) {
      
    const errType = ['ReferenceError', 'TypeError', 'Error', 'AggregatorError']

    if(err.message === 'Network Error' || err.message === 'Request failed with status code 500'){
      throw new Error('Network Error')
    }else if(errType.includes(err.name)){
      throw new Error('Something Went Wrong with the Application')
    }
  }

}