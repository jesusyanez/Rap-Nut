import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Content from '../components/content'
import Footer from '../components/footer'
import Navbar from '../components/navbar'




const Home: NextPage = () => {
  return (
    <div className="bg-black">
      <Head>
        <title>Loophole</title>
        <meta name="description" content="Music for the maker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="sticky top-0 z-50 blue'">
        <Navbar />
      </div>
      <div className='  max-w-7xl mx-auto md:max-w-2xl lg:max-w-2xl' >
      <Content />
      </div>
      {/* <div className='sticky'>
        <Footer />
      </div> */}

    </div>
  )
}

export default Home
