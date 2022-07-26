import { useEffect, useState } from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import { AiFillYoutube } from "react-icons/ai"


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
    
  <div className='flex  h-full'>
    <div className='w-full md:w-full lg:w-2/3 h-full m-auto'>
      <div className='mt-3 w-3/4 m-auto width'>
        <LiteYouTubeEmbed 
          id={data[0]['id']} // Default none, id of the video or playlist
          adNetwork={true} // Default true, to preconnect or not to doubleclick addresses called by YouTube iframe (the adnetwork from Google)
          params="" // any params you want to pass to the URL, assume we already had '&' and pass your parameters string
          muted={false}
          poster="maxresdefault" // Defines the image size to call on first render as poster image. Possible values are "default","mqdefault",  "hqdefault", "sddefault" and "maxresdefault". Default value for this prop is "hqdefault". Please be aware that "sddefault" and "maxresdefault", high resolution images are not always avaialble for every video. See: https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api
          title="looper" // a11y, always provide a title for iFrames: https://dequeuniversity.com/tips/provide-iframe-titles Help the web be accessible ;)
          noCookie={true} //Default false, connect to YouTube via the Privacy-Enhanced Mode using https://www.youtube-nocookie.com
        />
      </div>
      <div className='pt-3 w-5/6 m-auto width '>
        <div className='info text-center'>
          <p className='text-xl'>{data[0]['title']}</p>
          <p className='text-sm'>Produced by {data[0]['channel']['name']}</p>
        </div>
      </div>
      <div>
        <div className='flex place-content-center'>
        <div className='pr-5 mt-5 text-2xl'>
          <a href={data[0]['link']}>
            <button className='btn btn-lg btn-secondary' >Play on Youtube</button>
          </a>

          </div>
          <div className='pr-5 mt-5 text-lg'>
            <button className='btn btn-lg btn-primary text-black' onClick={() => handleClick('')}>Another one</button>
          </div>

        </div>
      </div>
    </div>
  </div>
  )
}
  

export default Content