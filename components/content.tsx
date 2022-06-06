import { useEffect, useState } from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import { GiRollingDices } from "react-icons/gi"
import { FaForward } from "react-icons/fa";
import { BiSkipNext, BiShuffle } from "react-icons/bi"
import Image from "next/image"

const Content =() => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://free-instrumental-api.vercel.app/api/beats')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  const handleClick = (value: string) => {
    fetch('https://free-instrumental-api.vercel.app/api/beats' + value)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
  });
  };

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
  

  return (
    
    <div className="embed min-w-30% max-w-90%">
      


        {/* Youtube player */}
      <div className='mt-3 h-50% m-auto width shadow-sm outline-black outline-dashed '>
        <LiteYouTubeEmbed // YouTube Video Player
          id={data[0]['id']} // Grabs id from json api data
          adNetwork={true} // Default true, to preconnect or not to doubleclick addresses called by YouTube iframe (the adnetwork from Google)
          params="" // any params you want to pass to the URL, assume we already had '&' and pass your 
          poster="hqdefault"
          title="player" // a11y, always provide a title for iFrames: https://dequeuniversity.com/tips/provide-iframe-titles Help the web be accessible ;)
          noCookie={true} //Default false, connect to YouTube via the Privacy-Enhanced Mode using https://www.youtube-nocookie.com
          />
      </div>


      <div className='w-90% flex'>
       
      

        <div className=' m-auto width'>
          <div className="card bg-black shadow-xl text-outline-white">
            <div className="card-body">
              
              <h2 className="card-title text-white text-sm font-outline-white outline-4 md: text-l shadow-sm">{data[0]['title']}</h2>
              {/* <div className='info text-white'>
                <p className='text-sm md:text-sm'>Prod by. {data[0]['channel']['name']}</p>
                <p className='text-sm md:text-sm'>Views: {data[0]['views']}</p>
              </div> */}
            </div>
          </div>

        </div>

        <div className=' '>
          <div className=' mt-10 text-2xl shadow-l sticky'>

            <button className='btn  btn-lg btn-secondary shadow-xl text-l' onClick={() => handleClick('')}><FaForward className='text-4xl shadow-m'/></button>
          </div>
        </div>




      </div>

    </div>
  )
}
  

export default Content