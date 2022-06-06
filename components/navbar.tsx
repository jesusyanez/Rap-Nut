import Image from "next/image"
import Link from "next/link"
import { GiRollingDices } from "react-icons/gi";
import logo from "../public/logo.png"

const Navbar =() => {
    return (
      <div>
        <div className="navbar sticky'">
        {/* <div className="navbar bg-[url('../public/block1.png')] bg-center"> */}
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl h-3rem">
              <Image 
                src={logo}
                height='70rem'
                width='260rem'
                alt='logo'
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
  

export default Navbar

function handleClick(arg0: string): void {
  throw new Error("Function not implemented.");
}
