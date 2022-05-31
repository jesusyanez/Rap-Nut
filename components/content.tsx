import { useEffect, useState } from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import { GiRollingDices } from "react-icons/gi"
import { BiSkipNext, BiShuffle } from "react-icons/bi"
import Image from "next/image"
import border2 from "../public/border2.png"
import slot from "../public/buttons/tap.png"


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
    
    <div className="embed min-w-30% max-w-90% ">

{/*  Download Button */}

      {/* <div className="collapse pt-3 w-4/6 m-auto">
        <input type="checkbox" /> 
      <div className="collapse-title btn  text-sm font-sm">
        Download MP3 320kbps
      </div>
      <div className="collapse-content"> 
        <iframe src={`https://yt-download.org/api/button/mp3?url=${data[0]['link']}`} style={{ height: "200px", backgroundColor: 'transparent'}} width={"100%"} className='download' allowTransparency={true} scrolling="no" frameBorder={0}></iframe>
      </div>


</div> */}


    
 
    <div className='mt-3 w-5/6 m-auto width shadow-xl'>
       {/*  beat player */}
   
    <LiteYouTubeEmbed
        id={data[0]['id']} // Default none, id of the video or playlist
        adNetwork={true} // Default true, to preconnect or not to doubleclick addresses called by YouTube iframe (the adnetwork from Google)
        params="" // any params you want to pass to the URL, assume we already had '&' and pass your parameters string
        muted={false}
    
        poster="hqdefault" // Defines the image size to call on first render as poster image. Possible values are "default","mqdefault",  "hqdefault", "sddefault" and "maxresdefault". Default value for this prop is "hqdefault". Please be aware that "sddefault" and "maxresdefault", high resolution images are not always avaialble for every video. See: https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api
        title="looper" // a11y, always provide a title for iFrames: https://dequeuniversity.com/tips/provide-iframe-titles Help the web be accessible ;)
        noCookie={true} //Default false, connect to YouTube via the Privacy-Enhanced Mode using https://www.youtube-nocookie.com
      />

    


    </div>

      <div className='inline-flex items-center justify-between mt-5 '>
      
        <div>
          <div className='pr-5 mt-8 text-2xl'>
            {/* <button className="btn btn-lg btn-primary">Button</button> */}
            <button className='btn  btn-lg btn-outline btn-primary shadow-xl text-lg' onClick={() => handleClick('')}><GiRollingDices className='text-6xl'/></button>
            {/* <button className='btn  btn-lg btn-ghost text-5xl' onClick={() => handleClick('')}>
            <Image 
                src={slot}
                height='50%'
                width='50%'
                alt='logo'
            />
            </button> */}
          </div>
        </div>
        <div className="card bg-black shadow-xl text-outline-white">
  <div className="card-body">
    <h2 className="card-title text-white text-m font-outline-white outline-4">{data[0]['title']}</h2>
    <div className='info text-white'>
          <p className='text-m'>Prod by. {data[0]['channel']['name']}</p>
        </div>
  </div>
</div>
        {/* <div className='info'>
          <p>{data[0]['title']}</p>
          <p className='smalltext'>Prod by. {data[0]['channel']['name']}</p>
        </div> */}


      
      {/* <div className='undervideo'>
        <div>
          <div className='buttonbox'>
            <button className='buttonobject' onClick={() => handleClick('')}><GiRollingDices /></button>
          </div>
        </div>

        <div className='info'>
          <p>{data[0]['title']}</p>
          <p className='smalltext'>Prod by. {data[0]['channel']['name']}</p>
        </div> */}


      </div>

    </div>
  )
}
  

export default Content