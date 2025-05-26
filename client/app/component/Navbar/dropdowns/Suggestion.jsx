import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import './css/suggestion.css'
import getSuggestion from '@/app/services/getSuggestion'
import { getDisplayCategoryLink } from '@/app/utils/formatLink'
import { ArrowRight } from 'phosphor-react'
import { DotLoader } from 'react-spinners'

export default function Suggestion({ query }) {

  const [suggestionData, setSuggestionData] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [err, setError] = useState(null)

  useEffect(() => {

    async function fetchData() {
      
      try{

        setLoading(true)

        const data = await getSuggestion(query)

        console.log(data)

        const queryData = data.results

        setSuggestionData(queryData)

        console.log(queryData)

      }catch(err){

        console.log(err)

        const errType = ['ReferenceError', 'TypeError', 'Error', 'AggregatorError']

        if(err.message === 'Network Error' || err.message === 'Request failed with status code 500'){
          setError('Network Error')
        }else if(errType.includes(err.name)){
          setError('Something Went Wrong with the Application')
        }else{
          setError('Server Error')
        }

      }finally{
        setLoading(false)
        setErr(null)
      }

    }

    fetchData()

  }, [query])

  console.log(suggestionData)

  const slicedSuggestion = suggestionData.length > 12 ? suggestionData.slice(0, 10) : suggestionData

  return (
    <div className='suggestion-box' id='suggestions'>
      <ul>
        { loading && <div className='w-full h-auto flex justify-center items-center'><DotLoader size={15} color='#ee49fd' loading/></div> }
        {err && !loading && <span className='text-center text-[indianred] font-semibold block'>{err}</span>}
        {slicedSuggestion.map((suggest, index) => {

          const formattedLink = getDisplayCategoryLink(suggest.link)

          return (
          <li key={index} data-id={suggest.id} data-shonen-id={suggest.id}>
              <Link href={{pathname: formattedLink, query: { og: encodeURIComponent(suggest.link) }}} data-og-link={suggest.link}>
              <Image src={suggest.imgURL} width={100} height={100} alt={suggest.title}/>
              <div className="text-content-div">
                <h3>{suggest.title}</h3>
                <span>{suggest.episode} Episode</span>
              </div>
            </Link>
          </li>
        )})}
        {suggestionData.length > 12 && (
          <div className='w-full h-auto p-2 border-t-1 border-t-[lightgrey] flex flex-row justify-end'>
            <Link href={`/search?query=${query}`} className='w-max flex flex-row justify-evenly items-center gap-4 text-[#eee] p-[5px] rounded font-bold'>SEE MORE <ArrowRight/></Link>
          </div>
        )}
      </ul>
    </div>
  )
}