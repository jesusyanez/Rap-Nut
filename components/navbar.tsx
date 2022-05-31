import Image from "next/image"
import Link from "next/link"
import { GiRollingDices } from "react-icons/gi";
import logo from "../public/logo.png"

const Navbar =() => {
    return (
      <div>
       <div className="navbar bg-transparent">
       {/* <div className="navbar bg-[url('../public/block1.png')] bg-center"> */}
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">
    <Image 
                src={logo}
                height='50rem'
                width='160rem'
                alt='logo'
            />
    </a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal text-md p-0">
    <li tabIndex={0}>
        <a>
          Artists
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><a>Lil Baby</a></li>

          <li><a>Pooh Shiesty</a></li>
          <li><a>Yeat</a></li>
          <li><a>Playboi Carti</a></li>
          <li><a>Kendrick Lamar</a></li>
          <li><a>J Cole</a></li>
          <li><a>Future</a></li>
          <li><a>Drake</a></li>
        </ul>
      </li>
      <li tabIndex={0}>
        <a>
          Genres
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><a>Hyper Pop</a></li>
          <li><a>Trap</a></li>
          <li><a>Hip Hop</a></li>
          
          <li><a>Indie</a></li>
        </ul>
      </li>

      <li className="mr-3" tabIndex={0}>
        <a>
          Mood
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><a>Hyper Pop</a></li>
          <li><a>Trap</a></li>
          <li><a>Hip Hop</a></li>
          
          <li><a>Indie</a></li>
        </ul>
      </li>
      {/* <li><a>About</a></li> */}
      {/* <li><a>Trap</a></li>
      <li><a>90s</a></li>
      <li><a>Indie</a></li>
      <li><a>Latin Trap</a></li> */}

{/*       
      <div className='pr-5  text-2xl mt-1'>
            <button className="btn btn-lg btn-primary">Button</button>
            <button className='btn btn-outline btn-primary text-lg' onClick={() => handleClick('')}><GiRollingDices 
            className='text-3xl'/></button>
          </div> */}

    </ul>
    
  </div>

</div>
      </div>
    );
  }
  

export default Navbar

function handleClick(arg0: string): void {
  throw new Error("Function not implemented.");
}
