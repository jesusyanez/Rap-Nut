import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Content from '../components/content'
import Footer from '../components/footer'
import Navbar from '../components/navbar'




const Home: NextPage = () => {
  return (
    <div className="filter grayscale bg-[url('https://media2.giphy.com/media/FlodpfQUBSp20/giphy.gif?cid=ecf05e47fzgmnkrft6gwnr4yb0cr5wef8a0uuxu9cekbc5ui&rid=giphy.gif&ct=g')] h-screen bg-repeat-round">
      <Head>
        <title>Loophole</title>
        <meta name="description" content="Music for the maker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="sticky top-0 z-50 blue">
        <Navbar />
      </div>
      <div className=' justify-between p-5 max-w-7xl mx-auto' >
      <Content />
      </div>

      <Footer />
    </div>
  )
}

export default Home
