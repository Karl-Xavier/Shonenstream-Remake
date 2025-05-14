'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useFeed } from '@/app/utils/context/feedContext'
import { ArrowLeft } from 'phosphor-react'

export default function page() {

  const { id } = useParams()
  const { feeds } = useFeed()
  const [item, setItem] = useState(null)

  useEffect(()=>{

    if(feeds.length > 0){
      const foundItem = feeds.find(feed => String(feed.id) === id)

      if(foundItem){
        localStorage.setItem('selectedFeed', JSON.stringify(foundItem))

        setItem(foundItem)
        console.log('Found')
      }

    }

  },[feeds])

  useEffect(()=>{
    if(!item){
      const storedItem = localStorage.getItem('selectedFeed')

      if(storedItem){
        const parsedItem = JSON.parse(storedItem)

        if(String(parsedItem.id) === id) {
          setItem(parsedItem)
        }
      }
    }
  },[item])

  if(!item) throw new Error('News Content Not Found')

  return (
    <div>
      <span><ArrowLeft/></span>
      <div className="top-info">
        <h2>{item.title}</h2>
        <span className='time'>4 Hours ago</span>
      </div>
      <img src={item.imgURL} alt={item.title} width={100} height={100} />
      <div className="description">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quos amet, a quisquam ipsam ratione laboriosam pariatur adipisci ab vero rerum culpa ex quasi vitae iusto. Maxime ex alias blanditiis?
        Facere ab libero esse quaerat alias repudiandae. Minus incidunt sed et nesciunt magnam eum unde soluta molestias voluptatibus sequi quibusdam repellendus, placeat corrupti voluptatum labore. Aliquam corrupti veritatis quis molestias.
        Incidunt delectus ullam iure qui, praesentium molestiae corrupti voluptate saepe? Eius quis dolorum nobis nostrum numquam alias, distinctio ullam quibusdam officia, at velit, veniam ipsam repellat tenetur quod quo quos!
        Maiores a explicabo non vitae nihil ut animi numquam maxime nesciunt, consectetur illo! Pariatur voluptates maxime dolorem, cumque tempore expedita saepe magni. Aut maiores architecto aperiam culpa, temporibus inventore excepturi?
        Nesciunt optio sequi illo laborum, ratione esse numquam doloribus. Reiciendis expedita incidunt, laboriosam iusto et error explicabo itaque nemo earum eos maiores laudantium saepe molestiae veniam a sapiente, beatae vero!
        Ipsam architecto eos, exercitationem labore commodi tempore nihil praesentium ut illum iste rem pariatur quia provident aliquid debitis distinctio quaerat. Nam vero quas minus dolore. Omnis modi esse eveniet possimus.
        Odit rerum id eum impedit adipisci sequi consequatur facere vel! Illum nihil aspernatur architecto numquam minus commodi iste dolorem quibusdam error in atque corporis facere pariatur harum dolor, repudiandae aliquid?
        Molestias numquam et qui quia? Repellendus voluptatum enim error incidunt assumenda repellat quae minus, eaque, ex adipisci laudantium esse hic commodi! Ut vel neque, at aliquam odio quidem! Fugit, recusandae?
        Dolorum numquam eveniet id consequuntur eum neque eaque fuga laborum. Laboriosam explicabo reprehenderit omnis odit assumenda praesentium beatae dolore aspernatur ipsa, laudantium at aliquid minima eum corrupti harum placeat cupiditate!
        Pariatur possimus quos repellat laudantium ex iusto quam fugiat enim reiciendis deleniti, sed aperiam cumque odit eius nemo voluptatibus ipsa at magni explicabo quod odio, est temporibus tenetur sint! Ab.
        Non earum cum suscipit architecto amet debitis! A magni voluptates at quo repellat asperiores voluptatem obcaecati enim praesentium repudiandae illum est dolorem impedit distinctio molestiae ipsa, accusantium aliquid nobis maxime.
        Cumque eaque praesentium odio veniam blanditiis debitis laborum vel iure quas. Nemo quo adipisci id aspernatur, perspiciatis inventore quae praesentium facere libero quasi debitis nesciunt. Earum deserunt exercitationem in dolor.</p>
      </div>
    </div>
  )
}