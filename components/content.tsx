import { useEffect, useState } from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import { GiRollingDices } from "react-icons/gi"


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
    
    <div className='flex width h-full'>
      <div className='w-1/2 h-full m-auto'>
      <div className='mt-3 w-4/5 m-auto width'>
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

      <div className='inline-flex items-center justify-between '>
      
        <div>
          <div className='pr-5 mt-5 text-2xl'>
    
            <button className='btn btn-outline btn-lg btn-primary text-lg' onClick={() => handleClick('')}>Next</button>
          </div>
        </div>

        <div className='info'>
          <p>{data[0]['title']}</p>
          <p className='smalltext'>Prod by. {data[0]['channel']['name']}</p>
        </div>
        
      </div>
      </div>

      <div className='w-1/2'>

       <div className="collapse pt-3 w-4/6 m-auto">
  <input type="checkbox" /> 
  <div className="collapse-title btn  text-sm font-sm">
    Download MP3
  </div>
  <div className="collapse-content"> 
  <iframe src={`https://yt-download.org/api/button/mp3?url=${data[0]['link']}`} style={{ height: "200px", backgroundColor: 'transparent'}} width={"100%"} className='download' allowTransparency={true} scrolling="no" frameBorder={0}></iframe>
  </div>
  
</div>
    
  <textarea className="textarea textarea-bordered   mt-3 h-4/6 w-full" placeholder="Notes"></textarea>



      </div>
     

      

    </div>
  )
}
  

export default Content